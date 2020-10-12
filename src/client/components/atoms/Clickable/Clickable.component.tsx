/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {
    FC, useState, useRef, MutableRefObject, MouseEvent,
} from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import styles from './style.scss';
import { Props } from './Clickable.types';

export const Clickable: FC<Props> = (props) => {
    const { children } = props;

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [visible, setVisible] = useState(false);

    const clickableArea: MutableRefObject<HTMLDivElement> = useRef<HTMLDivElement>();
    const clickableSpawn: MutableRefObject<HTMLDivElement> = useRef<HTMLDivElement>();
    const clickableSpawnClasses = classnames(styles.clickableSpawn);

    const style = {
        left: `${x}px`,
        top: `${y}px`,
    };

    function handleClick(event: MouseEvent<HTMLDivElement>): void {
        const clickableAreaRect: DOMRect = clickableArea.current.getBoundingClientRect();

        setX(event.clientX - clickableAreaRect.x);
        setY(event.clientY - clickableAreaRect.y);
        setVisible(true);
    }

    function hideClickableSpawn(): void {
        setVisible(false);
    }

    return (
        <div ref={clickableArea} onClick={handleClick} className={styles.clickableArea}>
            <CSSTransition
                classNames={{ ...styles }}
                in={visible}
                timeout={100}
                onEntered={hideClickableSpawn}
                unmountOnExit
                mountOnEnter
            >
                <div
                    ref={clickableSpawn}
                    className={clickableSpawnClasses}
                    style={style}
                />
            </CSSTransition>
            {children}
        </div>
    );
};
