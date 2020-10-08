import React, { FC } from 'react';
import classnames from 'classnames';
import * as styles from './style.scss';
import { ThemeType, Themes } from '../../../common/settings';

export const ParagraphSize = {
    LARGE: 'large',
    MEDIUM: 'medium',
    SMALL: 'small',
};

export const ParagraphTheme = {
    DARK: Themes.DARK,
    LIGHT: Themes.LIGHT,
};

interface Props {
    children: React.ReactNode;
    size?: string;
    theme?: ThemeType;
}

const defaultProps = {
    size: ParagraphSize.MEDIUM,
    theme: ParagraphTheme.LIGHT,
};

const Paragraph: FC<Props> = (props) => {
    const { children, size, theme } = props;
    const paragraphClass = classnames(styles.paragraph, styles[size], styles[theme]);

    return (
        <p className={paragraphClass}>{children}</p>
    );
};

Paragraph.defaultProps = defaultProps;
Paragraph.displayName = 'Paragraph';

export default Paragraph;
