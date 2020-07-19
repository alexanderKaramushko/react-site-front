import React, { ChangeEvent, useState } from 'react';
import Toggle from 'react-toggle';
import Tippy from '@tippyjs/react';
import Dropdown, { Option } from 'react-dropdown';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { ThemeType } from '../../../common/settings';

import BlockWithText from '../../molecules/BlockWithText/BlockWithText.container';

import Logo from '../../../assets/icons/design.svg';
import SettingsIcon from '../../../assets/icons/settings.svg';

import 'react-toggle/style.css';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-toward.css';
import 'react-dropdown/style.css';
import * as styles from './style.scss';
import { supportedLocales } from '../../../localization';
import UnorderedList from '../../molecules/UnorderedList/UnorderedList.component';
import { ROUTE_WAYS } from '../../../routes/routes.types';
import Fade from '../../transitions/Fade/Fade';

interface Props {
    selectedLocale: string;
    setLocaleWithFallback: (desiredLocale: string) => void;
    theme: ThemeType;
    toggleTheme: (theme: ThemeType) => void;
}

const defaultProps = {
    theme: 'light' as ThemeType,
};

const Header: React.FunctionComponent<Props> = (props) => {
    const {
        selectedLocale, setLocaleWithFallback, theme, toggleTheme,
    } = props;
    const classProps = classnames(styles.header, styles[theme]);
    const tipClassProps = classnames(styles[theme], styles.tip);

    const [visible, setVisible] = useState(false);

    const listItems = [
        { link: ROUTE_WAYS.BASE, title: 'nav.main' },
        { link: ROUTE_WAYS.ABOUT, title: 'nav.about' },
        { link: ROUTE_WAYS.CONTACTS, title: 'nav.contacts' },
    ];

    function handleThemeChange(event: ChangeEvent<HTMLInputElement>): void {
        const { target } = event;
        toggleTheme(target.checked ? 'dark' : 'light');
    }

    function handleLocaleChange(option: Option): void {
        const { value } = option;
        setLocaleWithFallback(value);
    }

    const show = (): void => setVisible(true);
    const hide = (): void => setVisible(false);

    return (
        <header className={classProps}>
            <Link to="/">
                <BlockWithText label="Logo" labelSize="medium" rowReverse>
                    <Logo className="design_svg__animated" width="40px" />
                </BlockWithText>
            </Link>

            <nav>
                <UnorderedList listItems={listItems} horizontal />
            </nav>

            <Fade>
                <Tippy
                    content={(
                        <div>
                            <BlockWithText label="settings.language" labelSize="small">
                                <Dropdown
                                    onChange={handleLocaleChange}
                                    options={Object.keys(supportedLocales)}
                                    value={selectedLocale}
                                />
                            </BlockWithText>
                            <BlockWithText label="settings.nightMode" labelSize="small">
                                <Toggle
                                    defaultChecked={false}
                                    icons={false}
                                    onChange={handleThemeChange}
                                />
                            </BlockWithText>
                        </div>
                    )}
                    animation="shift-toward"
                    className={tipClassProps}
                    interactive
                    onClickOutside={hide}
                    visible={visible}
                >
                    <span>
                        <SettingsIcon
                            className="settings_svg__animated"
                            height="40px"
                            onClick={visible ? hide : show}
                            width="40px"
                        />
                    </span>
                </Tippy>
            </Fade>
        </header>
    );
};

Header.defaultProps = defaultProps;

export default Header;
