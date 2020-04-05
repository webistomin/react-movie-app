import { Action } from 'redux';
import { FetchStatus } from 'common/types/fetch-status';
import { IMovieCredits } from 'common/types/movie-credits';

export interface IMovieCreditsState {
  movieCredits: IMovieCredits | null;
  fetchStatus: FetchStatus | null;
}

export enum ActionTypes {
  FETCH_MOVIE_CREDITS_START = '[movie] fetch movie credits start',
  FETCH_MOVIE_CREDITS_SUCCESS = '[movie] fetch movie credits success',
  FETCH_MOVIE_CREDITS_FAILURE = '[movie] fetch movie credits failure',
  CLEAR_MOVIE_CREDITS = '[movie] clear movie credits',
}

export interface IFetchMovieCreditsStartAction extends Action {
  payload: number;
  type: ActionTypes.FETCH_MOVIE_CREDITS_START;
}

export interface IFetchMovieCreditsSuccessAction extends Action {
  type: ActionTypes.FETCH_MOVIE_CREDITS_SUCCESS;
  payload: IMovieCredits;
}

export interface IFetchMovieCreditsFailureAction extends Action {
  type: ActionTypes.FETCH_MOVIE_CREDITS_FAILURE;
}

export interface IClearMovieCreditsAction extends Action {
  type: ActionTypes.CLEAR_MOVIE_CREDITS;
}

export type IFetchMovieCreditsActions =
  | IFetchMovieCreditsStartAction
  | IFetchMovieCreditsSuccessAction
  | IFetchMovieCreditsFailureAction
  | IClearMovieCreditsAction;
