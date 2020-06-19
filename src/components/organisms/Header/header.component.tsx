import React, { ChangeEvent, useState } from 'react';
import Toggle from 'react-toggle';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { ThemeType } from '../../../common/settings';

import LabeledImage from '../../molecules/LabeledImage/LabeledImage.container';
import Label from '../../atoms/Label/Label.container';

import Logo from '../../../assets/icons/design.svg';
import SettingsIcon from '../../../assets/icons/settings.svg';

import 'react-toggle/style.css';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-toward.css';
import * as styles from './style.scss';

interface Props {
    theme: ThemeType;
    toggleTheme: (theme: ThemeType) => void;
}

const defaultProps = {
    theme: 'light' as ThemeType,
};

const Header: React.FunctionComponent<Props> = (props) => {
    const { theme, toggleTheme } = props;
    const classProps = classnames(styles.header, styles[theme]);
    const tipClassProps = classnames(styles[theme], styles.tip);

    const [visible, setVisible] = useState(false);

    function handleCHange(event: ChangeEvent<HTMLInputElement>): void {
        const { target } = event;
        toggleTheme(target.checked ? 'dark' : 'light');
    }

    const show = (): void => setVisible(true);
    const hide = (): void => setVisible(false);

    return (
        <header className={classProps}>
            <Link to="/">
                <LabeledImage imagePosition="left" label="Logo">
                    <Logo className="design_svg__animated" width="40px" />
                </LabeledImage>
            </Link>

            <Tippy
                content={(
                    <div>
                        <div className={styles.themeToggler}>

                            <Label size="small">Night mode:</Label>
                            <Toggle
                                onChange={handleCHange}
                                icons={false}
                                defaultChecked={false}
                            />
                        </div>
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
                        className={styles.settingsIcon}
                        height="40px"
                        onClick={visible ? hide : show}
                        width="40px"
                    />
                </span>
            </Tippy>
        </header>
    );
};

Header.defaultProps = defaultProps;

export default Header;
