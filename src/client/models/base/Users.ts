import { AbstractEntity } from './AbstractEntity';

export interface User {
    id: string;
    name: string;
    description: string;
}

export interface Users extends AbstractEntity {
    users: User[];
}
