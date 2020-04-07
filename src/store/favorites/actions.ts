import { ActionTypes, IFavoriteMovie } from 'store/favorites/types';

export function saveFavoriteMovie(payload: IFavoriteMovie) {
  return {
    type: ActionTypes.SAVE_FAVORITE_MOVIE,
    payload,
  };
}

export function deleteFavoriteMovie(payload: number) {
  return {
    type: ActionTypes.DELETE_FAVORITE_MOVIE,
    payload,
  };
}
