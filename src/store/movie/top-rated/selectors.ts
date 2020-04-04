import { ApplicationState } from 'store/store';

export function getTopRatedMovies(state: ApplicationState) {
  return state.movies.topRatedMovies.topRatedMovies;
}
