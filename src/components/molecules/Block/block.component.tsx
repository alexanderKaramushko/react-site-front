import React from 'react';
import Button from '../../atoms/Button';
import Card from '../../atoms/Card';

type Props = {
    button?: string;
    children?: React.ReactNode;
    className?: string;
    clicks?: number;
    onRequestNewNumber?: () => void;
    title: string;
};

const defaultProps = {
    button: '',
    children: '',
    className: '',
    clicks: 0,
    title: '',
};

export const Block: React.FunctionComponent<Props> = (props: Props) => {
    const {
        button,
        children,
        className,
        onRequestNewNumber,
        clicks,
        title,
    } = props;

    return (
        <Card className={className}>
            <h2>{title}</h2>
            {children}
            {button !== '' && (
                <Button onClick={onRequestNewNumber}>{button}</Button>
            )}
            {clicks}
        </Card>
    );
};

Block.defaultProps = defaultProps;
