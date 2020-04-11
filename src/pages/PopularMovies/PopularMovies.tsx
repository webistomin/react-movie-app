import React, { FunctionComponent, useCallback, useEffect } from 'react';

import AppContent from 'components/ui/AppContent';
import AppFooter from 'components/partials/AppFooter';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentPagePopularMovies,
  getPopularMovies,
  getPopularMoviesFetchStatus,
  hasMorePagesWithPopularMovies,
} from 'store/movie/popular/selectors';
import { FetchStatus } from 'common/types/fetch-status';
import { b } from 'components/ui/AppContent/AppContent';
import { AppCardInfinityList } from 'components/ui/AppCardList';
import { fetchPopularMoviesStart, setPopularSearchPage } from 'store/movie/popular/actions';

const PopularMovies: FunctionComponent = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(getPopularMovies);
  const hasMoreElements = useSelector(hasMorePagesWithPopularMovies);
  const currentPage = useSelector(getCurrentPagePopularMovies);
  const requestStatus = useSelector(getPopularMoviesFetchStatus);

  useEffect(() => {
    dispatch(fetchPopularMoviesStart());
  }, [dispatch]);

  useEffect(() => {
    document.title = 'Popular movies 🔥';
  }, []);

  const loadMoreCards = useCallback(() => {
    if (requestStatus !== FetchStatus.PENDING) {
      const nextPage = currentPage + 1;
      dispatch(setPopularSearchPage(nextPage));
    }
  }, [dispatch, requestStatus, currentPage]);

  return (
    <>
      <AppContent className={b({ withPaddings: true })}>
        {popularMovies?.results && (
          <AppCardInfinityList
            currentPage={currentPage}
            hasMoreElements={hasMoreElements}
            title='Popular movies'
            movies={popularMovies.results}
            onLoadHandler={loadMoreCards}
          />
        )}
      </AppContent>
      <AppFooter />
    </>
  );
};

export default PopularMovies;
