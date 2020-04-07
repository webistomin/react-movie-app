import { Action } from 'redux';

export interface IFavoritesState {
  favoriteMoviesIds: number[];
}

export enum ActionTypes {
  SAVE_FAVORITE_MOVIE = '[favorite] save favorite movie',
  DELETE_FAVORITE_MOVIE = '[favorite] delete favorite movie',
}

export interface ISaveFavoriteMovieActions extends Action {
  type: ActionTypes.SAVE_FAVORITE_MOVIE;
  payload: number;
}

export interface IDeleteFavoriteMovieActions extends Action {
  type: ActionTypes.DELETE_FAVORITE_MOVIE;
  payload: number;
}

export type IFavoriteMovieActions = ISaveFavoriteMovieActions | IDeleteFavoriteMovieActions;
