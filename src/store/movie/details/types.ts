import { Action } from 'redux';
import { FetchStatus } from 'store/types';
import { IGenre } from 'store/genres/types';

export interface IMovieInterface {
  movieDetails: IMovieDetails | null;
}

export interface IMovieDetailsStateInterface extends IMovieInterface {
  fetchStatus: FetchStatus | null;
}

export enum ActionTypes {
  FETCH_MOVIE_DETAILS_START = '[movie] fetch movie details start',
  FETCH_MOVIE_DETAILS_SUCCESS = '[movie] fetch movie details success',
  FETCH_MOVIE_DETAILS_FAILURE = '[movie] fetch movie details failure',
}

export interface IMovieDetails {
  backdrop_path: string | null;
  budget: number | null;
  genres: Array<IGenre> | null;
  id: number | null;
  release_date: string | null;
  runtime: number | null;
  title: string | null;
  vote_average: number | null;
  overview: string | null;
  reviews: number | null;
  video: string | null;
}

export interface IFetchMovieDetailsStartAction extends Action {
  payload: number;
  type: ActionTypes.FETCH_MOVIE_DETAILS_START;
}

export interface IFetchMovieDetailsSuccessAction extends Action {
  type: ActionTypes.FETCH_MOVIE_DETAILS_SUCCESS;
  payload: IMovieInterface;
}

export interface IFetchMovieDetailsFailureAction extends Action {
  type: ActionTypes.FETCH_MOVIE_DETAILS_FAILURE;
}

export type IFetchMovieDetailsActions =
  | IFetchMovieDetailsStartAction
  | IFetchMovieDetailsSuccessAction
  | IFetchMovieDetailsFailureAction;
