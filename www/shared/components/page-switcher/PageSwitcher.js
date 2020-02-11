import React, { useCallback, useEffect, useMemo } from 'react';
import { SwitchTransition } from 'react-transition-group';
import { wrap } from 'lodash';
import ScrollBehavior from 'scroll-behavior';
import PropTypes from 'prop-types';
import Link from 'next/link';
import StateStorage from './StateStorage';

// TODO: make it obvious that whenever useRouter is used, the page will be "rerendered" when animating out

const RenderPropTransition = ({ render, onRestoreScroll, onExited, ...props }) => {
    const finalOnExited = useCallback((...args) => {
        console.log('restoring scroll', location.key);
        // TODO: should we restore scroll only when view is entering?
        //       this is working but I think it's the "retry" behavior of scroll-behavior lib
        onRestoreScroll();
        onExited(...args);
    }, [onRestoreScroll, onExited]);

    return render({ ...props, onExited: finalOnExited });
};

const createKey = () => Math.random()
    .toString(36)
    .substr(2, 8);

const wrapRouter = (router) => {
    if (typeof window === 'undefined') {
        return;
    }

    Link.defaultProps = {
        ...Link.defaultProps,
        scroll: false,
    };

    history.scrollRestoration = 'manual';

    history.pushState = wrap(history.pushState, (pushState, state, title, url) => {
        if (state) {
            if (history.state?.as !== url) {
                state.locationKey = createKey();
                location.key = state.locationKey;
            } else {
                state.locationKey = location.key;
            }
        }

        pushState.call(history, state, title, url);
    });

    history.replaceState = wrap(history.replaceState, (replaceState, state, title, url) => {
        console.log('replacing!!!', state, title, url);

        if (state) {
            if (history.state?.as !== url) {
                state.locationKey = createKey();
                location.key = state.locationKey;
            } else {
                state.locationKey = location.key;
            }
        }

        replaceState.call(history, state, title, url);
    });

    router.beforePopState = wrap(router.beforePopState, (beforePopState, fn) => {
        fn = wrap(fn, (fn, state) => {
            console.log('>>>', state);
            location.key = state.locationKey;

            return fn(state);
        });

        return beforePopState.call(router, fn);
    });

    router.beforePopState(() => true);
};

const PageSwitcher = ({ Component, pageProps, pageKey, router, children }) => {
    pageKey = pageKey ?? router.route;

    const scrollBehavior = useMemo(() => typeof window !== 'undefined' && new ScrollBehavior({
        addTransitionHook: (callback) => {
            router.events.on('routeChangeStart', callback);

            return () => {
                router.events.off('routeChangeStart', callback);
            };
        },
        getCurrentLocation: () => location,
        stateStorage: new StateStorage(router),
    }), [router]);

    useEffect(() => {
        wrapRouter(router);
    }, [router]);

    useEffect(() => () => scrollBehavior.stop(), [scrollBehavior]);

    const handleRestoreScroll = useCallback(() => {
        scrollBehavior.updateScroll(location);
    }, [scrollBehavior]);

    return (
        <SwitchTransition>
            <RenderPropTransition
                key={ pageKey }
                Component={ Component }
                pageProps={ pageProps }
                render={ children }
                onRestoreScroll={ handleRestoreScroll } />
        </SwitchTransition>
    );
};

PageSwitcher.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object,
    pageKey: PropTypes.string,
    router: PropTypes.object.isRequired,
    children: PropTypes.func.isRequired,
};

export default PageSwitcher;
