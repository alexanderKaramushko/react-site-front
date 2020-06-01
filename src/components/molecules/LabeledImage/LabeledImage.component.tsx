import React from 'react';
import classnames from 'classnames';

import Label from '../../atoms/Label';

import * as styles from './style.scss';

interface Props {
    children: React.ReactNode;
    imagePosition?: string;
    label: string;
}

const defaultProps = {
    imagePosition: 'right',
    label: '',
};

const LabeledImage: React.FunctionComponent<Props> = (props) => {
    const { children, label, imagePosition } = props;
    const classProps = classnames(styles.labeledImage);

    return (
        <span className={classProps}>
            {imagePosition === 'left' && children && children}
            <Label>{label}</Label>
            {imagePosition === 'right' && children && children}
        </span>
    );
};

LabeledImage.defaultProps = defaultProps;

export default LabeledImage;
