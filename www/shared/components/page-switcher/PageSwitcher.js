import React, { useCallback, useEffect, useMemo } from 'react';
import { SwitchTransition } from 'react-transition-group';
import ScrollBehavior from 'scroll-behavior';
import PropTypes from 'prop-types';
import StateStorage from './StateStorage';

const RenderPropTransition = ({ render, onRestoreScroll, onExited, ...props }) => {
    console.log('>>>>', props);

    const finalOnExited = useCallback((...args) => {
        onRestoreScroll();
        onExited(...args);
    }, [onRestoreScroll, onExited]);

    return render({ ...props, onExited: finalOnExited });
};

const PageSwitcher = ({ Component, pageProps, router, children }) => {
    const pageKey = router.route;

    console.log('page key', pageKey, StateStorage);

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

    useEffect(() => () => scrollBehavior.stop(), [scrollBehavior]);

    const handleRestoreScroll = useCallback(() => {
        console.log('should restore scroll');
        scrollBehavior.updateScroll();
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
