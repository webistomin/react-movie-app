import { ApplicationState } from 'store/store';

export function getMovieImages(state: ApplicationState) {
  return state.movies.movieImages.movieImages;
}
