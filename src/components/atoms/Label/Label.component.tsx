import React from 'react';
import classnames from 'classnames';

import * as styles from './style.scss';
import { ThemeType } from '../../../common/settings';

export const LabelTheme = {
    DARK: 'dark' as ThemeType,
    LIGHT: 'light' as ThemeType,
};

export const LabelSize = {
    LARGE: 'large',
    MEDIUM: 'medium',
    SMALL: 'small',
};

interface Props {
    theme?: ThemeType;
    children: React.ReactNode;
    size?: string;
}

const defaultProps = {
    children: 'label',
    size: 'medium',
    theme: 'light' as ThemeType,
};

const Label: React.FunctionComponent<Props> = (props) => {
    const { size, children, theme } = props;
    const classProps = classnames(styles.label, styles[theme], styles[size]);

    return <span className={classProps}>{children}</span>;
};

Label.defaultProps = defaultProps;

export default Label;
