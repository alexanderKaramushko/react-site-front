import * as React from 'react';
import Button from '../../atoms/Button';
import Card from '../../atoms/Card';

type Props = {
    button?: string;
    children?: React.ReactNode;
    className?: string;
    onRequestNewNumber: () => void;
    title: string;
};

const defaultProps = {
    className: '',
    children: '',
    title: '',
    button: '',
};

const Block: React.FunctionComponent<Props> = (props: Props) => {
    const { button, children, className, onRequestNewNumber, title } = props;

    return (
        <Card className={className}>
            <h2>{title}</h2>
            {children}
            {button !== '' && (
                <Button onClick={onRequestNewNumber}>{button}</Button>
            )}
        </Card>
    );
};

Block.defaultProps = defaultProps;

export default Block;
