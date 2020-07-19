import React, { FC, ReactNode } from 'react';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import { Props } from './Fade.types';

import * as styles from './style.scss';

const defaultProps: Props = {
    duration: 500,
};

const Fade: FC<Props> = (props: Props) => {
    const { children, duration, items } = props;
    const transitionPhases = {
        appear: styles.fadeAppear,
        appearActive: styles.fadeAppearActive,
    };

    if (children) {
        return (
            <TransitionGroup component={null} appear>
                <CSSTransition
                    timeout={duration}
                    classNames={transitionPhases}
                >
                    {children}
                </CSSTransition>
            </TransitionGroup>
        );
    }

    return (
        <TransitionGroup component={null} appear>
            {items.map((item: ReactNode) => (
                <CSSTransition
                    timeout={duration}
                    classNames={transitionPhases}
                >
                    {item}
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
};

Fade.defaultProps = defaultProps;
Fade.displayName = 'FadeTransition';

export default Fade;
