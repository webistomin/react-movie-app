import React, { FunctionComponent, useEffect } from 'react';

import App404 from 'components/ui/App404';
import AppContent from 'components/ui/AppContent';

const Error404: FunctionComponent = () => {
  useEffect(() => {
    document.title = 'Page not found ☠️';
  }, []);

  return (
    <AppContent>
      <App404 />
    </AppContent>
  );
};

export default Error404;
