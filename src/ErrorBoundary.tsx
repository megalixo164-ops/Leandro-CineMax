import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black-deep text-white-ice flex flex-col items-center justify-center p-8">
          <h1 className="text-3xl font-bold text-neon-red mb-4">Oops, ocorreu um erro!</h1>
          <p className="text-gray-400 mb-6">Infelizmente uma parte do aplicativo falhou ao carregar.</p>
          <pre className="bg-graphite border border-white/10 p-4 rounded-xl text-sm overflow-auto text-left max-w-full text-gray-300">
            {this.state.error?.message}
          </pre>
          <button 
            className="mt-8 px-6 py-3 bg-neon-blue/20 text-neon-blue rounded-full border border-neon-blue/30"
            onClick={() => window.location.reload()}
          >
            Tentar novamente
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
