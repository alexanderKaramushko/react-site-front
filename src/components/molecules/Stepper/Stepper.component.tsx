import React, { FC, ReactNode, useReducer } from 'react';
import Steps, { Step } from 'rc-steps';
import 'rc-steps/assets/index.css';
import { StepProps } from 'rc-steps/lib/Step';
import { CSSTransition } from 'react-transition-group';
import styles from './style.scss';
import {
    Props, State, Action, ActionTypes, Statuses,
} from './Stepper.types';
import Button from '../../atoms/Button/Button.component';
import HourglassIcon from '../../../assets/icons/hourglass.svg';
import PencilIcon from '../../../assets/icons/pencil.svg';
import TickIcon from '../../../assets/icons/tick.svg';
import { ButtonSizes } from '../../atoms/Button/Button.types';
import { Clickable } from '../../atoms/Clickable/Clickable.component';

function reducer(state: State, action: Action): State {
    switch (action.type) {
    case ActionTypes.NEXT_STEP:
        return {
            ...state,
            currentStep: state.steps.length === state.currentStep ? state.currentStep : state.currentStep + 1,
        };
    case ActionTypes.PREVIOUS_STEP:
        return {
            ...state,
            currentStep: state.currentStep === 0 ? state.currentStep : state.currentStep - 1,
        };
    case ActionTypes.SET_STATUS:
        return {
            ...state,
            steps: state.steps.map((step: StepProps, index: number) => {
                if (index === state.currentStep) {
                    return {
                        ...step,
                        status: action.payload.status,
                    };
                }
                return step;
            }),
        };
    default:
        return state;
    }
}

const Stepper: FC<Props> = (props) => {
    const { contentNodes, currentStep, steps } = props;
    const [state, dispatch] = useReducer(reducer, {
        currentStep: currentStep ?? 0,
        steps,
    });

    function setNextStep(): void {
        dispatch({ payload: { status: Statuses.FINISH }, type: ActionTypes.SET_STATUS });
        dispatch({ type: ActionTypes.NEXT_STEP });
        dispatch({ payload: { status: Statuses.PROCESS }, type: ActionTypes.SET_STATUS });
    }

    function renderIcon(status: Statuses): ReactNode {
        const iconAttrs = {
            height: '20px',
            width: '20px',
        };

        switch (status) {
        case Statuses.FINISH:
            // eslint-disable-next-line react/jsx-props-no-spreading
            return <TickIcon {...iconAttrs} />;
        case Statuses.PROCESS:
            // eslint-disable-next-line react/jsx-props-no-spreading
            return <PencilIcon {...iconAttrs} />;
        default:
            // eslint-disable-next-line react/jsx-props-no-spreading
            return <HourglassIcon {...iconAttrs} />;
        }
    }

    function renderSteps(stepsArr: State['steps']): ReactNode[] {
        return stepsArr.map((step: StepProps) => {
            const { status } = step;
            const icon: ReactNode = renderIcon(status as Statuses);

            return <Step status={status} icon={icon} />;
        });
    }

    function renderContent(nodes: ReactNode[]): ReactNode[] {
        return nodes.map((contentNode: ReactNode, index: number) => (
            <CSSTransition
                classNames={{ ...styles }}
                in={index === state.currentStep}
                timeout={500}
                mountOnEnter
                unmountOnExit
            >
                {contentNode}
            </CSSTransition>
        ));
    }

    return (
        <>
            <Steps current={state.currentStep}>
                {renderSteps(state.steps)}
            </Steps>
            <div className={styles.content}>
                {renderContent(contentNodes)}
            </div>
            <Clickable>
                <Button
                    onClick={setNextStep}
                    size={ButtonSizes.SMALL}
                >
                    Continue
                </Button>
            </Clickable>
        </>
    );
};

export default Stepper;
