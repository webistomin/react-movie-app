import React from 'react';
import AppErrorIndicator from '@/components/ui/AppErrorIndicator';

export default class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <AppErrorIndicator />;
    }

    return this.props.children;
  }
}
