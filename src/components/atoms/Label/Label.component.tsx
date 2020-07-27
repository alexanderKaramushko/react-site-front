import React from 'react';
import classnames from 'classnames';
import { Themes } from '../../../common/settings';
import { Props } from './Label.types';
import * as styles from './style.scss';

export const LabelTheme = {
    DARK: Themes.DARK,
    LIGHT: Themes.LIGHT,
};

export const LabelSize = {
    LARGE: 'large',
    MEDIUM: 'medium',
    SMALL: 'small',
};

const defaultProps = {
    children: 'label',
    size: 'medium',
    theme: Themes.LIGHT,
};

const Label: React.FunctionComponent<Props> = (props) => {
    const { size, children, theme } = props;
    const classProps = classnames(styles.label, styles[theme], styles[size]);

    return <span className={classProps}>{children}</span>;
};

Label.defaultProps = defaultProps;
Label.displayName = 'Label';

export default Label;
