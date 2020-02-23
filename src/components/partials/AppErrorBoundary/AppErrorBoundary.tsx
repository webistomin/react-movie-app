import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';

import AppErrorIndicator from 'components/ui/AppErrorIndicator';

interface IProps {
  className?: string;
}

const b = cn('ErrorBoundary');

export default class ErrorBoundary extends Component<IProps> {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    const { className } = this.props;

    if (this.state.hasError) {
      return <AppErrorIndicator className={classnames(b('ErrorBoundary'), className)} />;
    }

    return this.props.children;
  }
}
