import React, { useEffect } from 'react';
import classnames from 'classnames';
import * as styles from './style.scss';
import { Props } from './TextSize.types';

const TextSize: React.FunctionComponent<Props> = (props: Props) => {
    const { size, changeSize } = props;
    const classProps = classnames(styles['text-size']);

    useEffect(() => {
        document.body.parentElement.style.fontSize = `${size}%`;
    }, [size]);

    const dec = (): void => {
        const newSize = size === 60 ? 60 : size - 20;
        changeSize(newSize);
    };

    const inc = (): void => {
        const newSize = size === 200 ? 200 : size + 20;
        changeSize(newSize);
    };

    return (
        <div className={classProps}>
            <button type="button" onClick={dec} className={styles.dec}>&minus;</button>
            <p>
                {size}
                %
            </p>
            <button type="button" onClick={inc} className={styles.inc}>+</button>
        </div>
    );
};

export default TextSize;
