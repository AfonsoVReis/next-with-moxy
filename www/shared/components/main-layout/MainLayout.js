import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../header';
import Footer from '../footer';
import FadeTransition from '../fade-transition';

import styles from './MainLayout.module.css';

const MainLayout = ({ in: inProp, children }) => {
    useEffect(() => {
        console.log('mounting main layout');

        return () => {
            console.log('unmounting main layout');
        };
    }, []);

    return (
        <div className={ styles.mainLayout }>
            <FadeTransition in={ inProp }>
                <Header className={ styles.header } />
            </FadeTransition>

            <main className={ styles.content }>
                { children }
            </main>

            <FadeTransition in={ inProp }>
                <Footer className={ styles.footer } />
            </FadeTransition>
        </div>
    );
};

MainLayout.propTypes = {
    in: PropTypes.bool,
    children: PropTypes.node,
};

export default MainLayout;
