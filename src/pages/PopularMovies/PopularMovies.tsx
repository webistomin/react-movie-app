import React, { FunctionComponent } from 'react';

import AppCardList from 'components/ui/AppCardList';
import AppContent from 'components/ui/AppContent';
import AppFooter from 'components/partials/AppFooter';

const PopularMovies: FunctionComponent = () => {
  return (
    <>
      <AppContent>
        <AppCardList />
      </AppContent>
      <AppFooter />
    </>
  );
};

export default PopularMovies;
