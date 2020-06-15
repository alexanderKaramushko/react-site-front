import * as React from 'react';
import classnames from 'classnames';

import * as styles from './style.scss';
import { ThemeType } from '../../../common/settings';

export const ParagraphSize = {
    LARGE: 'large',
    MEDIUM: 'medium',
    SMALL: 'small',
};

export const ParagraphTheme = {
    DARK: 'dark' as ThemeType,
    LIGHT: 'light' as ThemeType,
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

const Paragraph: React.FunctionComponent<Props> = (props): React.ReactElement => {
    const { children, size, theme } = props;
    const paragraphClass = classnames(styles.paragraph, styles[size], styles[theme]);

    return (
        <p className={paragraphClass}>{children}</p>
    );
};

Paragraph.defaultProps = defaultProps;

export default Paragraph;
