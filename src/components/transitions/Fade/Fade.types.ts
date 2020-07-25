import { ReactNode } from 'react';
import { ComponentWithId } from '../../../models/base/ui/components';

export interface Props {
    items?: ComponentWithId[];
    duration?: number;
    children?: ReactNode;
    renderChildren?: Function;
}
