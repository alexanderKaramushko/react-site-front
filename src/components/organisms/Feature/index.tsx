import React from 'react';
import classnames from 'classnames';

import * as styles from './style.scss';

type Props = {
    children?: React.ReactNode;
    className?: string;
    image: string;
};

const defaultProps = {
    children: '',
    className: '',
    image: '',
};

const Feature: React.FunctionComponent<Props> = (props: Props) => {
    const { children, className, image } = props;
    const classNames: string = classnames(styles.feature, className);

    return (
        <div
            style={{ backgroundImage: `url(${image})` }}
            className={classNames}
        >
            {children}
        </div>
    );
};

Feature.defaultProps = defaultProps;

export default Feature;
