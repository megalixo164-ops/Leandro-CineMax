import React from "react";

export class ErrorBoundary extends React.Component<{ children?: React.ReactNode }, { hasError: boolean, error: Error | null }> {
  constructor(props: { children?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black-deep text-white-ice flex flex-col items-center justify-center p-8">
          <h1 className="text-3xl font-bold text-neon-red mb-4">Oops, ocorreu um erro!</h1>
          <p className="text-gray-400 mb-6">Infelizmente uma parte do aplicativo falhou ao carregar.</p>
          <pre className="bg-graphite border border-white/10 p-4 rounded-xl text-sm overflow-auto text-left max-w-full text-gray-300 font-mono">
            {this.state.error?.message}
          </pre>
          <button 
            className="mt-8 px-6 py-3 bg-neon-blue/20 text-neon-blue rounded-full border border-neon-blue/30 hover:bg-neon-blue/30 transition-colors"
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
