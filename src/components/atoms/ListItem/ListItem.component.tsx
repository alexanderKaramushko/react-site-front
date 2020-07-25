import React from 'react';
import classnames from 'classnames';
import { Themes } from '../../../common/settings';
import { Props } from './ListItem.types';
import * as styles from './style.scss';

export const ListItemTheme = {
    DARK: Themes.DARK,
    LIGHT: Themes.LIGHT,
};

export const ListItemSize = {
    LARGE: 'large',
    MEDIUM: 'medium',
    SMALL: 'small',
};

const defaultProps = {
    children: '',
    size: 'medium',
    theme: Themes.LIGHT,
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
