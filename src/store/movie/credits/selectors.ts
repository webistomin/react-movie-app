import { ApplicationState } from 'store/store';

export function getMovieCredits(state: ApplicationState) {
  return state.movies.movieCredits.movieCredits;
}

export function getMovieCreditsFetchStatus(state: ApplicationState) {
  return state.movies.movieCredits.fetchStatus;
}
