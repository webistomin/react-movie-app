import { ApplicationState } from 'store/store';

export function getLatestMovie(state: ApplicationState) {
  return state.movies.latestMovies.latestMovie;
}
