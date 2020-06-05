import React from 'react';
import Toggle from 'react-toggle';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import LabeledImage from '../../molecules/LabeledImage';
import Label from '../../atoms/Label';

import Logo from '../../../assets/icons/design.svg';

import 'react-toggle/style.css';
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

            <div className={styles.themeToggler}>
                <Label size="small">Night mode:</Label>
                <Toggle
                    defaultChecked={false}
                    icons={false}
                />
            </div>
        </header>
    );
};

Header.defaultProps = defaultProps;

export default Header;
