import { ApplicationState } from 'store/store';

export function getRecommendedMovies(state: ApplicationState) {
  return state.movies.recommendedMovies.recommendedMovie;
}
