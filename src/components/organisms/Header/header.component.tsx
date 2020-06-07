import React, { ChangeEvent } from 'react';
import Toggle from 'react-toggle';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import LabeledImage from '../../molecules/LabeledImage';
import Label from '../../atoms/Label';

import Logo from '../../../assets/icons/design.svg';

import 'react-toggle/style.css';
import * as styles from './style.scss';
import { ThemeType } from '../../../common/settings';

interface Props {
    themeName: ThemeType;
    toggleTheme: (themeName: ThemeType) => void;
}

const defaultProps = {
    themeName: 'light' as ThemeType,
};

const Header: React.FunctionComponent<Props> = (props) => {
    const { themeName, toggleTheme } = props;
    const classProps = classnames(styles.header, styles[themeName]);

    function handleCHange(event: ChangeEvent<HTMLInputElement>): void {
        const { target } = event;
        toggleTheme(target.checked ? 'dark' : 'light');
    }

    return (
        <header className={classProps}>
            <Link to="/">
                <LabeledImage imagePosition="left" label="Logo" theme={themeName}>
                    <Logo className="design_svg__animated" width="50px" />
                </LabeledImage>
            </Link>

            <div className={styles.themeToggler}>
                <Label theme={themeName} size="small">Night mode:</Label>
                <Toggle
                    onChange={handleCHange}
                    icons={false}
                    defaultChecked={false}
                />
            </div>
        </header>
    );
};

Header.defaultProps = defaultProps;

export default Header;
