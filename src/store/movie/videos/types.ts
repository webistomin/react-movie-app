import { Action } from 'redux';
import { FetchStatus } from 'common/types/fetch-status';
import { IVideos } from 'common/types/videos';

export interface IMovieVideosState {
  movieVideos: IVideos | null;
  fetchStatus: FetchStatus | null;
}

export enum ActionTypes {
  FETCH_MOVIE_VIDEOS_START = '[movie] fetch movie videos start',
  FETCH_MOVIE_VIDEOS_SUCCESS = '[movie] fetch movie videos success',
  FETCH_MOVIE_VIDEOS_FAILURE = '[movie] fetch movie videos failure',
  CLEAR_MOVIE_VIDEOS = '[movie] clear movie videos',
}

export interface IFetchMovieVideosStartAction extends Action {
  payload: number;
  type: ActionTypes.FETCH_MOVIE_VIDEOS_START;
}

export interface IFetchMovieVideosSuccessAction extends Action {
  type: ActionTypes.FETCH_MOVIE_VIDEOS_SUCCESS;
  payload: IVideos;
}

export interface IFetchMovieVideosFailureAction extends Action {
  type: ActionTypes.FETCH_MOVIE_VIDEOS_FAILURE;
}

export interface IClearMovieVideosAction extends Action {
  type: ActionTypes.CLEAR_MOVIE_VIDEOS;
}

export type IFetchMovieVideosActions =
  | IFetchMovieVideosStartAction
  | IFetchMovieVideosSuccessAction
  | IFetchMovieVideosFailureAction
  | IClearMovieVideosAction;
