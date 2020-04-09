import { ApplicationState } from 'store/store';

export function getNowPlayingMovies(state: ApplicationState) {
  return state.movies.nowPlayingMovies.nowPlayingMovies;
}

export function getNowPlayingFetchStatus(state: ApplicationState) {
  return state.movies.nowPlayingMovies.fetchStatus;
}

export function getCurrentPageNowPlayingMovies(state: ApplicationState) {
  return state.movies.nowPlayingMovies.nowPlayingSearchPage;
}

export function hasMorePagesWithNowPlayingMovies(state: ApplicationState) {
  if (state.movies.nowPlayingMovies.nowPlayingMovies) {
    return (
      state.movies.nowPlayingMovies.nowPlayingSearchPage < state.movies.nowPlayingMovies.nowPlayingMovies.total_pages
    );
  }

  return false;
}
