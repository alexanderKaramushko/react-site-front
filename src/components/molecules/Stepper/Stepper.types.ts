import { ReactNode } from 'react';
import { StepProps } from 'rc-steps/lib/Step';
import { Themes } from '../../../common/settings';

export enum ActionTypes {
    ERROR = 'error',
    NEXT_STEP = 'nextStep',
    PREVIOUS_STEP = 'previousStep',
    SET_STATUS = 'setStatus',
}

export enum Statuses {
    ERROR = 'error',
    FINISH = 'finish',
    PROCESS = 'process',
    WAIT = 'wait',
}

export interface Payload {
    status: Statuses;
}

export interface Action {
    type: ActionTypes;
    payload?: Payload;
}

export interface State {
    currentStep?: number;
    steps: StepProps[];
}

export interface OwnProps extends State {
    contentNodes: ReactNode[];
}

export interface StateProps {
    theme?: Themes;
}

export type DispatchProps = {}

export type Props = OwnProps & StateProps & DispatchProps;
