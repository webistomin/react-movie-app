import { Action } from 'redux';
import { FetchStatus } from 'common/types/fetch-status';
import { IGenre } from 'common/types/genre';

export interface IGenresState {
  genres: IGenre[] | null;
  fetchStatus: FetchStatus | null;
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
  payload: IGenre[];
}

export interface IFetchMovieGenresFailureAction extends Action {
  type: ActionTypes.FETCH_MOVIE_GENRES_FAILURE;
}

export type IFetchGenresActions =
  | IFetchMovieGenresStartAction
  | IFetchMovieGenresSuccessAction
  | IFetchMovieGenresFailureAction;
