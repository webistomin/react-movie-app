import { Action } from 'redux';
import { FetchStatus } from 'common/types/fetch-status';
import { IMovie } from 'common/types/movie';

export interface IMovieDetailsState {
  movieDetails: IMovie | null;
  fetchStatus: FetchStatus | null;
}

export enum ActionTypes {
  FETCH_MOVIE_DETAILS_START = '[movie] fetch movie details start',
  FETCH_MOVIE_DETAILS_SUCCESS = '[movie] fetch movie details success',
  FETCH_MOVIE_DETAILS_FAILURE = '[movie] fetch movie details failure',
}

export interface IFetchMovieDetailsStartAction extends Action {
  payload: number;
  type: ActionTypes.FETCH_MOVIE_DETAILS_START;
}

export interface IFetchMovieDetailsSuccessAction extends Action {
  type: ActionTypes.FETCH_MOVIE_DETAILS_SUCCESS;
  payload: IMovie;
}

export interface IFetchMovieDetailsFailureAction extends Action {
  type: ActionTypes.FETCH_MOVIE_DETAILS_FAILURE;
}

export type IFetchMovieDetailsActions =
  | IFetchMovieDetailsStartAction
  | IFetchMovieDetailsSuccessAction
  | IFetchMovieDetailsFailureAction;
