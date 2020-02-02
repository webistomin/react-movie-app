import React from 'react';
import App404 from '@/components/ui/App404';
import AppContent from '@/components/ui/AppContent';

export default class Error404 extends React.Component {
  componentDidMount() {
    document.title = 'Page not found ☠️';
  }

  render() {
    return (
      <AppContent>
        <App404 />
      </AppContent>
    );
  }
}
