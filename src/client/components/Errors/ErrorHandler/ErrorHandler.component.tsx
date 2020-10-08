import React from 'react';
import { createPortal } from 'react-dom';
import { Props, State } from './ErrorHandler.types';
import { DefaultError } from '../DefaultError/DefaultError.component';

class ErrorHandler extends React.Component<Props, State> {

    // check for ssr
    private portal = typeof document !== 'undefined' && document.querySelector('#modal');

    constructor(props: Props) {
        super(props);

        this.state = {
            error: null,
            hasError: false,
        };
    }

    static getDerivedStateFromError(error: Error): State {
        return { error, hasError: true };
    }

    render(): React.ReactNode {
        const { ErrorComponent, children } = this.props;
        const { error, hasError } = this.state;

        if (hasError) {
            // check for ssr
            if (!this.portal) {
                return <ErrorComponent />;
            }
            if (ErrorComponent) {
                return createPortal(<ErrorComponent />, this.portal);
            }
            return createPortal(<DefaultError error={error} />, this.portal);
        }

        return (
            <>
                {children}
            </>
        );
    }

}

export default ErrorHandler;
