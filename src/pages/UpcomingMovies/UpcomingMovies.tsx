import React, { FunctionComponent, useCallback, useEffect } from 'react';

import AppContent from 'components/ui/AppContent';
import AppFooter from 'components/partials/AppFooter';
import { useDispatch, useSelector } from 'react-redux';
import { FetchStatus } from 'common/types/fetch-status';
import { b } from 'components/ui/AppContent/AppContent';
import { AppCardInfinityList } from 'components/ui/AppCardList';
import {
  getCurrentPageUpcomingMovies,
  getUpcomingFetchStatus,
  getUpcomingMovies,
  hasMorePagesWithUpcomingMovies,
} from 'store/movie/upcoming/selectors';
import { fetchUpcomingMoviesStart, setUpcomingSearchPage } from 'store/movie/upcoming/actions';

const UpcomingMovies: FunctionComponent = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector(getUpcomingMovies);
  const hasMoreElements = useSelector(hasMorePagesWithUpcomingMovies);
  const currentPage = useSelector(getCurrentPageUpcomingMovies);
  const requestStatus = useSelector(getUpcomingFetchStatus);

  useEffect(() => {
    dispatch(fetchUpcomingMoviesStart());
  }, [dispatch]);

  useEffect(() => {
    document.title = 'Upcoming movies 📅';
  }, []);

  const loadMoreCards = useCallback(() => {
    if (requestStatus !== FetchStatus.PENDING) {
      const nextPage = currentPage + 1;
      dispatch(setUpcomingSearchPage(nextPage));
    }
  }, [dispatch, requestStatus, currentPage]);

  return (
    <>
      <AppContent className={b({ withPaddings: true })}>
        {upcomingMovies?.results && (
          <AppCardInfinityList
            currentPage={currentPage}
            hasMoreElements={hasMoreElements}
            title='Upcoming movies'
            movies={upcomingMovies.results}
            onLoadHandler={loadMoreCards}
          />
        )}
      </AppContent>
      <AppFooter />
    </>
  );
};

export default UpcomingMovies;
