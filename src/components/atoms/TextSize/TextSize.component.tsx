import React, { useEffect } from 'react';
import { Themes } from '../../../common/settings';
import * as styles from './style.scss';

export interface StateProps {
    theme: Themes;
    size: number;
}

export interface DispatchProps {
    changeSize: (newSize: number) => void;
}

type Props = StateProps & DispatchProps;

const TextSize: React.FunctionComponent<Props> = (props: Props) => {
    const { size, changeSize } = props;

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
        <div className={styles['text-size']}>
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
