import { ApplicationState } from 'store/store';

export function getTopRatedMovies(state: ApplicationState) {
  return state.movies.topRatedMovies.topRatedMovies;
}

export function getTopRatedFetchStatus(state: ApplicationState) {
  return state.movies.topRatedMovies.fetchStatus;
}

export function getCurrentPageTopRatedMovies(state: ApplicationState) {
  return state.movies.topRatedMovies.topRatedSearchPage;
}

export function hasMorePagesWithTopRatedMovies(state: ApplicationState) {
  if (state.movies.topRatedMovies.topRatedMovies) {
    return state.movies.topRatedMovies.topRatedSearchPage < state.movies.topRatedMovies.topRatedMovies.total_pages;
  }

  return false;
}
