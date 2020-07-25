import React from 'react';
import classnames from 'classnames';
import * as styles from './style.scss';
import { Themes } from '../../../common/settings';
import { OwnProps } from './ListItem.types';

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

const ListItem: React.FunctionComponent<OwnProps> = (props) => {
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
