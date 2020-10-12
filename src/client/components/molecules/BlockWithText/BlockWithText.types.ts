import { Themes } from '../../../common/settings';

export enum LabelSize {
    SMALL = 'small',
    MEDIUM = 'medim',
    LARGE = 'large',
}

export interface OwnProps {
    children: React.ReactNode;
    label: string;
    labelSize?: LabelSize;
    rowReverse?: boolean;
    theme?: Themes;
}

export interface StateProps {
    theme?: Themes;
}

export type DispatchProps = {}

export type Props = OwnProps & StateProps & DispatchProps;
