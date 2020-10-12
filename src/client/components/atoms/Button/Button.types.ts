import { ReactNode } from 'react';
import { Sizes } from '../../../common/UITypes';

export enum Variants {
    CONTAINED = 'contained',
    OUTLINED = 'outlined',
    TEXT = 'text',
}

export type Props = {
    children: ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    size?: Sizes;
    variant?: Variants;
}
