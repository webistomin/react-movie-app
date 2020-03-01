import { ApplicationState } from 'store/store';

export function getPopularMovies(state: ApplicationState) {
  return state.movies.popularMovies.popularMovie;
}
