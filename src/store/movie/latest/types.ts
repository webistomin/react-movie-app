import { Action } from 'redux';
import { FetchStatus } from 'common/types/fetch-status';
import { IMovie } from 'common/types/movie';

export interface ILatestMovieState {
  latestMovie: IMovie | null;
  fetchStatus: FetchStatus | null;
}

export enum ActionTypes {
  FETCH_LATEST_MOVIE_START = '[movie] fetch latest movie start',
  FETCH_LATEST_MOVIE_SUCCESS = '[movie] fetch latest movie success',
  FETCH_LATEST_MOVIE_FAILURE = '[movie] fetch latest movie failure',
}

export interface IFetchLatestMovieStartAction extends Action {
  type: ActionTypes.FETCH_LATEST_MOVIE_START;
}

export interface IFetchLatestMovieSuccessAction extends Action {
  type: ActionTypes.FETCH_LATEST_MOVIE_SUCCESS;
  payload: IMovie;
}

export interface IFetchLatestMovieFailureAction extends Action {
  type: ActionTypes.FETCH_LATEST_MOVIE_FAILURE;
}

export type IFetchLatestMovieActions =
  | IFetchLatestMovieStartAction
  | IFetchLatestMovieSuccessAction
  | IFetchLatestMovieFailureAction;
