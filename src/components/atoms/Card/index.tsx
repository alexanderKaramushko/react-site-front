import * as React from 'react';
import classnames from 'classnames';

import * as styles from './style.scss';

type Props = {
    className?: string;
    children?: any;
};

const defaultProps = {
    className: '',
    children: '',
};

const Card: React.FunctionComponent<Props> = (props: Props) => {
    const { className, children } = props;
    const classNames: string = classnames(styles.card, className);

    return <div className={classNames}>{children}</div>;
};

Card.defaultProps = defaultProps;

export default Card;
