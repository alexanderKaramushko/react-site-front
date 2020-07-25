import { ReactNode } from 'react';
import { ComponentWithId } from '../../../models/base/ui/components';

export interface Props {
    children?: ReactNode;
    duration?: number;
    items?: ComponentWithId[];
}
