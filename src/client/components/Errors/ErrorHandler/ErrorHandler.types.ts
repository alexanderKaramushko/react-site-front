import { ReactNode, ComponentType } from 'react';

export interface State {
    error: Error | null;
    hasError: boolean;
}

export interface OwnProps {
    children?: ReactNode;
    ErrorComponent?: ComponentType;
}

export type Props = OwnProps;
