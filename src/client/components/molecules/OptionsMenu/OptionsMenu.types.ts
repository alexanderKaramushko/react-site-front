import { ReactNode } from 'react';

interface OwnProps {
    ariaLabel: string;
    children?: ReactNode;
    icon: ReactNode;
    onChoose?: (selectedOption: string) => void;
    options?: string[];
    selectedOption?: string;
}

export type StateProps = {}

export type DispatchProps = {}

export type Props = OwnProps & StateProps & DispatchProps;
