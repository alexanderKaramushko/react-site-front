import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import LabeledImage from '../../molecules/LabeledImage';
import Logo from '../../../assets/icons/design.svg';

import * as styles from './style.scss';

const NavbarThemes = {
    dark: 'dark',
    light: 'light',
};

interface Props {
    theme?: any;
}

const defaultProps = {
    theme: 'light',
};

const Header: React.FunctionComponent<Props> = (props) => {
    const { theme } = props;
    const classProps = classnames(styles.header, styles[theme]);

    return (
        <header className={classProps}>
            <Link to="/" className="logo-link">
                <LabeledImage imagePosition="left" label="Logo"><Logo className="design_svg__animated" width="50px" /></LabeledImage>
            </Link>
        </header>
    );
};

Header.defaultProps = defaultProps;

export default Header;
