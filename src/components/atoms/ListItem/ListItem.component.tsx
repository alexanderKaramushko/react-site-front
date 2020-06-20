import React from 'react';
import classnames from 'classnames';

import * as styles from './style.scss';
import { ThemeType } from '../../../common/settings';

export const ListItemTheme = {
    DARK: 'dark' as ThemeType,
    LIGHT: 'light' as ThemeType,
};

export const ListItemSize = {
    LARGE: 'large',
    MEDIUM: 'medium',
    SMALL: 'small',
};

interface Props {
    children: React.ReactNode;
    size?: string;
    theme?: ThemeType;
}

const defaultProps = {
    children: '',
    size: 'medium',
    theme: 'light' as ThemeType,
};

const ListItem: React.FunctionComponent<Props> = (props) => {
    const { children, size, theme } = props;
    const classProps = classnames(styles.listItem, styles[theme], styles[size]);

    return (
        <li className={classProps}>
            {children}
        </li>
    );
};

ListItem.defaultProps = defaultProps;
ListItem.displayName = 'ListItem';

export default ListItem;
