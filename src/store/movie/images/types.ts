import { Action } from 'redux';
import { FetchStatus } from 'common/types/fetch-status';
import { IImages } from 'common/types/images';

export interface IMovieImagesState {
  movieImages: IImages | null;
  fetchStatus: FetchStatus | null;
}

export enum ActionTypes {
  FETCH_MOVIE_IMAGES_START = '[movie] fetch movie images start',
  FETCH_MOVIE_IMAGES_SUCCESS = '[movie] fetch movie images success',
  FETCH_MOVIE_IMAGES_FAILURE = '[movie] fetch movie images failure',
  CLEAR_MOVIE_IMAGES = '[movie] clear movie images',
}

export interface IFetchMovieImagesStartAction extends Action {
  payload: number;
  type: ActionTypes.FETCH_MOVIE_IMAGES_START;
}

export interface IFetchMovieImagesSuccessAction extends Action {
  type: ActionTypes.FETCH_MOVIE_IMAGES_SUCCESS;
  payload: IImages;
}

export interface IFetchMovieImagesFailureAction extends Action {
  type: ActionTypes.FETCH_MOVIE_IMAGES_FAILURE;
}

export interface IClearMovieImagesAction extends Action {
  type: ActionTypes.CLEAR_MOVIE_IMAGES;
}

export type IFetchMovieImagesActions =
  | IFetchMovieImagesStartAction
  | IFetchMovieImagesSuccessAction
  | IFetchMovieImagesFailureAction
  | IClearMovieImagesAction;
