import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = ({ className }) => (
    <header className={ classNames(styles.header, className) }>
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </li>
            <li>
                <Link href="/newsletter">
                    <a>Newsletter</a>
                </Link>
            </li>
        </ul>
    </header>
);

Header.propTypes = {
    className: PropTypes.string,
};

export default Header;
