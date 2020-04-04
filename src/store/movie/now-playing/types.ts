import { ISearch } from 'common/types/search';
import { IMovie } from 'common/types/movie';
import { FetchStatus } from 'common/types/fetch-status';
import { Action } from 'redux';

export interface INowPlayingMoviesState {
  nowPlayingMovies: ISearch<IMovie> | null;
  fetchStatus: FetchStatus | null;
}

export enum ActionTypes {
  FETCH_NOW_PLAYING_MOVIES_START = '[movie] fetch now playing movies start',
  FETCH_NOW_PLAYING_MOVIES_SUCCESS = '[movie] fetch now playing movies success',
  FETCH_NOW_PLAYING_MOVIES_FAILURE = '[movie] fetch now playing movies failure',
}

export interface IFetchNowPlayingMoviesStartAction extends Action {
  type: ActionTypes.FETCH_NOW_PLAYING_MOVIES_START;
}

export interface IFetchNowPlayingMoviesSuccessAction extends Action {
  type: ActionTypes.FETCH_NOW_PLAYING_MOVIES_SUCCESS;
  payload: ISearch<IMovie>;
}

export interface IFetchNowPlayingMoviesFailureAction extends Action {
  type: ActionTypes.FETCH_NOW_PLAYING_MOVIES_FAILURE;
}

export type IFetchNowPlayingMoviesActions =
  | IFetchNowPlayingMoviesStartAction
  | IFetchNowPlayingMoviesSuccessAction
  | IFetchNowPlayingMoviesFailureAction;
