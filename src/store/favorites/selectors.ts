import { ApplicationState } from 'store/store';

export function getFavoriteMovies(state: ApplicationState) {
  return state.favoriteMovies.favoriteMovies;
}
