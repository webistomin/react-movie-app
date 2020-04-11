import React, { FunctionComponent, useCallback, useEffect } from 'react';

import AppContent from 'components/ui/AppContent';
import AppFooter from 'components/partials/AppFooter';
import { useDispatch, useSelector } from 'react-redux';
import { FetchStatus } from 'common/types/fetch-status';
import { b } from 'components/ui/AppContent/AppContent';
import { AppCardInfinityList } from 'components/ui/AppCardList';
import {
  getCurrentPageNowPlayingMovies,
  getNowPlayingFetchStatus,
  getNowPlayingMovies,
  hasMorePagesWithNowPlayingMovies,
} from 'store/movie/now-playing/selectors';
import { fetchNowPlayingMoviesStart, setNowPlayingSearchPage } from 'store/movie/now-playing/actions';

const NowPlayingMovies: FunctionComponent = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(getNowPlayingMovies);
  const hasMoreElements = useSelector(hasMorePagesWithNowPlayingMovies);
  const currentPage = useSelector(getCurrentPageNowPlayingMovies);
  const requestStatus = useSelector(getNowPlayingFetchStatus);

  useEffect(() => {
    dispatch(fetchNowPlayingMoviesStart());
  }, [dispatch]);

  useEffect(() => {
    document.title = 'Now playing movies 🎞️';
  }, []);

  const loadMoreCards = useCallback(() => {
    if (requestStatus !== FetchStatus.PENDING) {
      const nextPage = currentPage + 1;
      dispatch(setNowPlayingSearchPage(nextPage));
    }
  }, [dispatch, requestStatus, currentPage]);

  return (
    <>
      <AppContent className={b({ withPaddings: true })}>
        {nowPlayingMovies?.results && (
          <AppCardInfinityList
            currentPage={currentPage}
            hasMoreElements={hasMoreElements}
            title='Now playing movies'
            movies={nowPlayingMovies.results}
            onLoadHandler={loadMoreCards}
          />
        )}
      </AppContent>
      <AppFooter />
    </>
  );
};

export default NowPlayingMovies;
