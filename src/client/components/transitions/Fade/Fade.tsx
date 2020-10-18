import React, { FC, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Props } from './Fade.types';

import styles from './style.scss';
import { ComponentWithId } from '../../../models/base/ui/components';

const defaultProps: Props = {
    duration: 500,
};

const Fade: FC<Props> = (props) => {
    const { children, duration, items, renderChildren } = props;
    const [visible, setVisible] = useState(true);

    function handleClose(): void {
        setVisible(false);
    }

    if (renderChildren) {
        return (
            <CSSTransition
                classNames={{ ...styles }}
                in={visible}
                timeout={duration}
                unmountOnExit
                appear
            >
                {renderChildren(handleClose)}
            </CSSTransition>
        );
    }

    if (children) {
        return (
            <TransitionGroup component={null} appear>
                <CSSTransition
                    timeout={duration}
                    classNames={{ ...styles }}
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
                            classNames={{ ...styles }}
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
