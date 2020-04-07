import { ApplicationState } from 'store/store';

export function getPopularMovies(state: ApplicationState) {
  return state.movies.popularMovies.popularMovie;
}

export function getPopularMoviesFetchStatus(state: ApplicationState) {
  return state.movies.popularMovies.fetchStatus;
}

export function getCurrentPagePopularMovies(state: ApplicationState) {
  return state.movies.popularMovies.popularSearchPage;
}

export function hasMorePagesWithPopularMovies(state: ApplicationState) {
  if (state.movies.popularMovies.popularMovie) {
    return state.movies.popularMovies.popularSearchPage < state.movies.popularMovies.popularMovie.total_pages;
  }

  return false;
}
