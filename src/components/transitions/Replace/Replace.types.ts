import { ReactNode } from 'react';
import { Animations } from '../../../common/animations';

export interface Toggle {
    isVisible: boolean;
    render: (handleToggle?: () => void) => ReactNode;
}

export interface OwnProps {
    animationType?: Animations;
    renderToggleIn: (handleToggle: () => void) => ReactNode;
    startOffMs?: number;
    togglesOut: ReactNode[];
}

export type Props = OwnProps;
