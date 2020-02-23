import React, { FunctionComponent, useEffect } from 'react';

import AppIntro from 'components/ui/AppIntro';
import AppCarousel from 'components/ui/AppCarousel';
import AppContent from 'components/ui/AppContent';
import AppFooter from 'components/partials/AppFooter';

const Home: FunctionComponent = () => {
  useEffect(() => {
    document.title = 'Home, sweet home :: 💚';
  }, []);

  return (
    <>
      <AppContent>
        <AppIntro />
        <AppCarousel />
        <AppCarousel />
      </AppContent>
      <AppFooter />
    </>
  );
};

export default Home;
