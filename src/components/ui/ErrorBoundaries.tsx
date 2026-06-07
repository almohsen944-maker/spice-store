import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(err: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", err, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8">
          <h2 className="text-2xl font-serif text-brand-brown mb-4">Oops, something went wrong</h2>
          <button 
            className="px-6 py-2 bg-brand-gold text-brand-cream rounded-premium"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
