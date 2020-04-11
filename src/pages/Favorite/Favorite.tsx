import React, { FunctionComponent, useEffect } from 'react';

import AppContent from 'components/ui/AppContent';
import AppFooter from 'components/partials/AppFooter';
import { b } from 'components/ui/AppContent/AppContent';
import AppCardList from 'components/ui/AppCardList';
import { useSelector } from 'react-redux';
import { getFavoriteMovies } from 'store/favorites/selectors';

const FavoriteMovies: FunctionComponent = () => {
  const favoriteMovies = useSelector(getFavoriteMovies);

  useEffect(() => {
    document.title = `Favorite movies – ${favoriteMovies.length} items`;
  }, [favoriteMovies]);

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
