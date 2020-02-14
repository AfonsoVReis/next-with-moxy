import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import styles from './FadeTransition.module.css';

const FadeTransition = ({ children, ...rest }) => (
    <CSSTransition
        classNames={ {
            enter: styles.enter,
            enterActive: styles.enterActive,
            exit: styles.exit,
            exitActive: styles.exitActive,
        } }
        timeout={ 400 }
        { ...rest }>
        { children }
    </CSSTransition>
);

FadeTransition.propTypes = {
    children: PropTypes.element.isRequired,
};

export default FadeTransition;
