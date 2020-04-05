import { ApplicationState } from 'store/store';

export function getMovieVideos(state: ApplicationState) {
  return state.movies.movieVideos.movieVideos;
}
