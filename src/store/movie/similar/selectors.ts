import { ApplicationState } from 'store/store';

export function getSimilarMovies(state: ApplicationState) {
  return state.movies.similarMovies.similarMovie;
}
