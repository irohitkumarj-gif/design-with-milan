import React, { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 sm:p-6 text-slate-100 font-sans">
          <div className="max-w-md w-full p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 mx-auto flex items-center justify-center">
              <AlertTriangle className="w-7 h-7" />
            </div>
            
            <h1 className="text-xl font-bold text-white tracking-tight">
              Design With Milan Portfolio
            </h1>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              We encountered a minor display issue loading the session. Click below to refresh the portfolio smoothly.
            </p>

            {this.state.error && (
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-left text-xs font-mono text-slate-400 overflow-x-auto max-h-28">
                {this.state.error.message}
              </div>
            )}

            <button
              onClick={this.handleReset}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-teal-500/10"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reload Portfolio</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
