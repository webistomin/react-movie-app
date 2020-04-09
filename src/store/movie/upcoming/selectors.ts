import { ApplicationState } from 'store/store';

export function getUpcomingMovies(state: ApplicationState) {
  return state.movies.upcomingMovies.upcomingMovies;
}

export function getUpcomingFetchStatus(state: ApplicationState) {
  return state.movies.upcomingMovies.fetchStatus;
}

export function getCurrentPageUpcomingMovies(state: ApplicationState) {
  return state.movies.upcomingMovies.upcomingSearchPage;
}

export function hasMorePagesWithUpcomingMovies(state: ApplicationState) {
  if (state.movies.upcomingMovies.upcomingMovies) {
    return state.movies.upcomingMovies.upcomingSearchPage < state.movies.upcomingMovies.upcomingMovies.total_pages;
  }

  return false;
}
