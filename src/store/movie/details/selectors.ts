import { ApplicationState } from 'store/store';

export function getMovieDetails(state: ApplicationState) {
  return state.movies.movieDetails.movieDetails;
}
