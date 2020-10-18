import React, { FC, useState, ReactNode } from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { Props, Toggle } from './Replace.types';
import styles from './style.scss';
import { Animations } from '../../../common/animations';

const defaultProps = {
    animationType: Animations.FORWARD,
    startOffMs: 500,
};

const Replace: FC<Props> = (props) => {
    const { animationType, renderToggleIn, startOffMs, togglesOut } = props;
    const [toggles, setToggles] = useState<Toggle[]>([
        { isVisible: true, render: renderToggleIn },
        ...togglesOut.map((component: ReactNode) => ({ isVisible: false, render: (): ReactNode => component })),
    ]);

    function handleToggle(): void {
        // eslint-disable-next-line arrow-body-style
        setToggles((state: Toggle[]): Toggle[] => state.map((toggle: Toggle) => {
            return { ...toggle, isVisible: !toggle.isVisible };
        }));
    }

    return (
        <div className={styles.wrapper}>
            {toggles.map((toggle: Toggle, index: number) => {
                const animationStep = index + 1;
                const transitionClass = styles[`${animationType}-${animationStep}`];

                return (
                    <CSSTransition
                        in={toggle.isVisible}
                        classNames={{
                            enter: styles.enter,
                            enterActive: classnames(styles[`enterActive-${animationStep}`], transitionClass),
                            exit: styles.exit,
                            exitActive: styles[`exitActive-${animationStep}`],
                        }}
                        timeout={startOffMs * animationStep}
                        mountOnEnter
                        unmountOnExit
                    >
                        <div className={styles.toggleElement}>
                            {toggle.render(handleToggle)}
                        </div>
                    </CSSTransition>
                );
            })}
        </div>
    );
};

Replace.defaultProps = defaultProps;
Replace.displayName = 'ReplaceAnimation';

export default Replace;
