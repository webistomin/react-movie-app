import { ApplicationState } from 'store/store';

export function getFavoriteMovieIds(state: ApplicationState) {
  return state.favoriteMovies.favoriteMoviesIds;
}
