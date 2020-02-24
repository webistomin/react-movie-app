import { Action } from 'redux';
import { FetchStatus } from 'store/types';

export interface IGenres {
  genres: Array<IGenre> | null;
  fetchStatus: FetchStatus | null;
}

export interface IGenre {
  id: number;
  name: string;
}

export enum ActionTypes {
  FETCH_MOVIE_GENRES_START = '[genres] fetch movie genres start',
  FETCH_MOVIE_GENRES_SUCCESS = '[genres] fetch movie genres success',
  FETCH_MOVIE_GENRES_FAILURE = '[genres] fetch movie genres failure',
}

export interface IFetchMovieGenresStartAction extends Action {
  type: ActionTypes.FETCH_MOVIE_GENRES_START;
}

export interface IFetchMovieGenresSuccessAction extends Action {
  type: ActionTypes.FETCH_MOVIE_GENRES_SUCCESS;
  payload: Array<IGenre>;
}

export interface IFetchMovieGenresFailureAction extends Action {
  type: ActionTypes.FETCH_MOVIE_GENRES_FAILURE;
}

export type IFetchGenresActions =
  | IFetchMovieGenresStartAction
  | IFetchMovieGenresSuccessAction
  | IFetchMovieGenresFailureAction;
