import * as React from 'react';

interface IProps {
    message: string;
    onClick: (message: string) => void;
}

const Hello = (props: IProps) => {
    const { message, onClick } = props;

    const handleClick = (message: string): void => onClick(message);

    return <div onClick={() => handleClick('World!')}>Hello, {message}</div>;
};

export default Hello;
