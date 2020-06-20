import * as React from 'react';

export interface Props {
    children?: React.ReactNode;
    ErrorComponent?: React.ComponentType;
}

export interface State {
    hasError: boolean;
}

const DefaultErrorComponent: React.FunctionComponent = () => (
    <h3>Ooops something is wrong</h3>
);

class ErrorHandler extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(error: any): State {
        return { hasError: true };
    }

    render(): React.ReactNode {
        const { children, ErrorComponent } = this.props;
        const { hasError } = this.state;

        if (!hasError) return <>{children}</>;
        if (ErrorComponent) return <ErrorComponent />;
        return <DefaultErrorComponent />;
    }
}

export default ErrorHandler;
