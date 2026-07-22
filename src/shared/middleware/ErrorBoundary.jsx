"use client";

import { Component } from "react";
import { Button } from "@/shared/ui/Button/Button";
import { Text } from "@/shared/ui/Text/Text";

/**
 * Reusable error boundary for client-side component isolation.
 * Use for widget-level error handling within a page.
 *
 * @extends {Component<{children: React.ReactNode, fallback?: React.ReactNode | ((error: Error, reset: () => void) => React.ReactNode), onError?: (error: Error, errorInfo: import('react').ErrorInfo) => void, name?: string}, {hasError: boolean, error: Error|null}>}
 */
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    if (process.env.NODE_ENV === 'development') {
      console.error(
        `[ErrorBoundary${this.props.name ? `:${this.props.name}` : ""}]`,
        error,
        errorInfo,
      );
    }
    this.props.onError?.(error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (typeof this.props.fallback === "function") {
        return this.props.fallback(this.state.error, this.handleReset);
      }
      return (
        this.props.fallback || (
          <div role="alert" style={{ padding: "var(--space-xl)", textAlign: "center", backgroundColor: "var(--color-gray-100)", borderRadius: "8px" }}>
            <Text as="h3" style={{ marginBottom: "var(--space-sm)" }}>Algo salió mal en esta sección</Text>
            <Text as="p" variant="muted" style={{ marginBottom: "var(--space-md)" }}>
              {"Ocurrió un error inesperado."}
            </Text>
            <Button variant="outline" onClick={this.handleReset}>Intentar de nuevo</Button>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
