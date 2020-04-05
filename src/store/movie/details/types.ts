import { Action } from 'redux';
import { FetchStatus } from 'common/types/fetch-status';
import { IMovieDetails } from 'common/types/movie-details';

export interface IMovieDetailsState {
  movieDetails: IMovieDetails | null;
  fetchStatus: FetchStatus | null;
}

export enum ActionTypes {
  FETCH_MOVIE_DETAILS_START = '[movie] fetch movie details start',
  FETCH_MOVIE_DETAILS_SUCCESS = '[movie] fetch movie details success',
  FETCH_MOVIE_DETAILS_FAILURE = '[movie] fetch movie details failure',
  CLEAR_MOVIE_DETAILS = '[movie] clear movie details',
}

export interface IFetchMovieDetailsStartAction extends Action {
  payload: number;
  type: ActionTypes.FETCH_MOVIE_DETAILS_START;
}

export interface IFetchMovieDetailsSuccessAction extends Action {
  type: ActionTypes.FETCH_MOVIE_DETAILS_SUCCESS;
  payload: IMovieDetails;
}

export interface IFetchMovieDetailsFailureAction extends Action {
  type: ActionTypes.FETCH_MOVIE_DETAILS_FAILURE;
}

export interface IClearMovieDetailsAction extends Action {
  type: ActionTypes.CLEAR_MOVIE_DETAILS;
}

export type IFetchMovieDetailsActions =
  | IFetchMovieDetailsStartAction
  | IFetchMovieDetailsSuccessAction
  | IFetchMovieDetailsFailureAction
  | IClearMovieDetailsAction;
