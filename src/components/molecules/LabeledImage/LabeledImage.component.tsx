import React from 'react';
import classnames from 'classnames';

import Label from '../../atoms/Label';

import * as styles from './style.scss';
import { ThemeType } from '../../../common/settings';

export type imagePositionsType = 'left' | 'right';

interface Props {
    theme?: ThemeType;
    children: React.ReactNode;
    imagePosition?: imagePositionsType;
    label: string;
}

const defaultProps = {
    children: '',
    imagePosition: 'left' as imagePositionsType,
    label: '',
    theme: 'light' as ThemeType,
};

const LabeledImage: React.FunctionComponent<Props> = (props) => {
    const {
        children, label, imagePosition, theme,
    } = props;
    const classProps = classnames(styles.labeledImage);

    return (
        <span className={classProps}>
            {imagePosition === 'left' && children && children}
            <Label theme={theme}>{label}</Label>
            {imagePosition === 'right' && children && children}
        </span>
    );
};

LabeledImage.defaultProps = defaultProps;

export default LabeledImage;
