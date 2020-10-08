export interface ListItem {
    link?: string;
    title?: string;
}

export interface OwnProps {
    className?: string;
    dotted?: boolean;
    horizontal?: boolean;
    listItems: ListItem[];
}

export type Props = OwnProps;
