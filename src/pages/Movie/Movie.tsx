import React, { FunctionComponent } from 'react';

import AppIntro from 'components/ui/AppIntro';
import AppContent from 'components/ui/AppContent';
import AppCarousel from 'components/ui/AppCarousel';
import AppFooter from 'components/partials/AppFooter';

const Movie: FunctionComponent = () => {
  return (
    <>
      <AppContent>
        <AppIntro />
        {/*<AppCarousel />*/}
        {/*<AppCarousel />*/}
      </AppContent>
      <AppFooter />
    </>
  );
};

export default Movie;
