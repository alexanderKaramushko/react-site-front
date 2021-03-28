import React, { ErrorInfo, ReactNode } from 'react';
import { ErrorState, ErrorHandlingComponent, ErrorHandler } from './Catch.types';

export default function Catch<Props extends {}>(
  component: ErrorHandlingComponent<Props>,
  errorHandler?: ErrorHandler,
): React.ComponentType<Props> {
  return class extends React.Component<Props, ErrorState> {

    constructor(props: Props) {
      super(props);

      this.state = {
        error: null,
      };
    }

    static getDerivedStateFromError(error: Error): ErrorState {
      return { error };
    }

    componentDidCatch(error: Error, info: ErrorInfo): void {
      if (errorHandler) {
        errorHandler(error, info);
      }
    }

    render(): ReactNode {
      const { error } = this.state;

      return component(this.props, error);
    }

  };
}
