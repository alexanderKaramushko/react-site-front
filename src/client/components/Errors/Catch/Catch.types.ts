export type ErrorHandler = (error: Error, info: React.ErrorInfo) => void

export type ErrorHandlingComponent<Props> = (props: Props, error: Error | null) => React.ReactNode

export interface ErrorState {
  error: Error | null;
}
