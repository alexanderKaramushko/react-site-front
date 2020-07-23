import React, { FC } from 'react';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import { Props } from './Fade.types';

import * as styles from './style.scss';
import { ComponentWithId } from '../../../models/base/ui/components';

const defaultProps: Props = {
    duration: 500,
};

const Fade: FC<Props> = (props) => {
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

    if (items) {
        return (
            <TransitionGroup component={null} appear>
                {items.map((item: ComponentWithId) => {
                    const { id, component } = item;

                    return (
                        <CSSTransition
                            timeout={duration}
                            classNames={transitionPhases}
                            key={id}
                        >
                            {component}
                        </CSSTransition>
                    );
                })}
            </TransitionGroup>
        );
    }

    return null;

};

Fade.defaultProps = defaultProps;
Fade.displayName = 'FadeTransition';

export default Fade;
