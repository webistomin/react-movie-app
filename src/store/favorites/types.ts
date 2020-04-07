import { Action } from 'redux';
import { IMovie } from 'common/types/movie';

export interface IFavoriteMovie {
  title: IMovie['title'];
  poster_path: IMovie['poster_path'];
  id: IMovie['id'];
  vote_average: IMovie['vote_average'];
}

export interface IFavoritesState {
  favoriteMovies: IFavoriteMovie[];
}

export enum ActionTypes {
  SAVE_FAVORITE_MOVIE = '[favorite] save favorite movie',
  DELETE_FAVORITE_MOVIE = '[favorite] delete favorite movie',
}

export interface ISaveFavoriteMovieActions extends Action {
  type: ActionTypes.SAVE_FAVORITE_MOVIE;
  payload: IFavoriteMovie;
}

export interface IDeleteFavoriteMovieActions extends Action {
  type: ActionTypes.DELETE_FAVORITE_MOVIE;
  payload: number;
}

export type IFavoriteMovieActions = ISaveFavoriteMovieActions | IDeleteFavoriteMovieActions;
