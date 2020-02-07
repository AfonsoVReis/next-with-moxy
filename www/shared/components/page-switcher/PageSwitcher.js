import React, { useCallback, useEffect, useMemo } from 'react';
import { SwitchTransition } from 'react-transition-group';
import { wrap } from 'lodash';
import ScrollBehavior from 'scroll-behavior';
import PropTypes from 'prop-types';
import Link from 'next/link';
import StateStorage from './StateStorage';

const RenderPropTransition = ({ render, onRestoreScroll, onExited, ...props }) => {
    console.log('>>>>', props);

    const finalOnExited = useCallback((...args) => {
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
        if (state && history.state?.as !== url) {
            console.log('!!!!!!!!!!!!! pushState new key');
            state.locationKey = createKey();
            location.key = state.locationKey;
        }

        pushState.call(history, state, title, url);
    });

    history.replaceState = wrap(history.replaceState, (replaceState, state, title, url) => {
        if (state && history.state?.as !== url) {
            console.log('!!!!!!!!!!!!! replaceState new key');
            state.locationKey = createKey();
            location.key = state.locationKey;
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

const PageSwitcher = ({ Component, pageProps, router, children }) => {
    const pageKey = router.route;

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
    router: PropTypes.object.isRequired,
    children: PropTypes.func.isRequired,
};

export default PageSwitcher;
