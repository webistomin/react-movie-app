import React, { FunctionComponent } from 'react';

import AppContent from 'components/ui/AppContent';
import AppFooter from 'components/partials/AppFooter';
import { b } from 'components/ui/AppContent/AppContent';
import AppCardList from 'components/ui/AppCardList';
import { useSelector } from 'react-redux';
import { getFavoriteMovies } from 'store/favorites/selectors';

const FavoriteMovies: FunctionComponent = () => {
  const favoriteMovies = useSelector(getFavoriteMovies);

  return (
    <>
      <AppContent className={b({ withPaddings: true })}>
        {favoriteMovies && <AppCardList title='Favorite list' movies={favoriteMovies} />}
      </AppContent>
      <AppFooter />
    </>
  );
};

export default FavoriteMovies;
