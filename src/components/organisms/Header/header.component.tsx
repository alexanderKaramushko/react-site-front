import React, { ChangeEvent, useState } from 'react';
import Toggle from 'react-toggle';
import Tippy from '@tippyjs/react';
import Dropdown, { Option } from 'react-dropdown';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { Themes } from '../../../common/settings';

import BlockWithText from '../../molecules/BlockWithText/BlockWithText.container';

import Logo from '../../../assets/icons/design.svg';
import SettingsIcon from '../../../assets/icons/settings.svg';
import TextSize from '../../atoms/TextSize/TextSize.container';
import { supportedLocales } from '../../../localization';
import UnorderedList from '../../molecules/UnorderedList/UnorderedList.component';
import Fade from '../../transitions/Fade/Fade';
import { listItems } from '../../../routes/routes';

import 'react-toggle/style.css';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-toward.css';
import 'react-dropdown/style.css';
import * as styles from './style.scss';
import { LabelSize } from '../../molecules/BlockWithText/BlockWithText.types';
import { Props } from './Header.types';

const defaultProps = {
    theme: Themes.LIGHT,
};

const Header: React.FunctionComponent<Props> = (props) => {
    const {
        selectedLocale, setLocaleWithFallback, theme, toggleTheme,
    } = props;
    const classProps = classnames(styles.header, styles[theme]);
    const tipClassProps = classnames(styles[theme], styles.tip);

    const [visible, setVisible] = useState(false);

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
                <BlockWithText label="Logo" labelSize={LabelSize.MEDIUM} rowReverse>
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
                            <BlockWithText label="settings.language" labelSize={LabelSize.SMALL}>
                                <Dropdown
                                    onChange={handleLocaleChange}
                                    options={Object.keys(supportedLocales)}
                                    value={selectedLocale}
                                />
                            </BlockWithText>
                            <BlockWithText label="settings.nightMode" labelSize={LabelSize.SMALL}>
                                <Toggle
                                    defaultChecked={false}
                                    icons={false}
                                    onChange={handleThemeChange}
                                />
                            </BlockWithText>
                            <BlockWithText label="settings.textSize" labelSize={LabelSize.SMALL}>
                                <TextSize />
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
