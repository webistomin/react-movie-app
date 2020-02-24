import { Action } from 'redux';
import { IGenres } from 'store/genres/types';
import { FetchStatus } from 'store/types';

export interface IMovieInterface {
  latestMovie: IMovie | null;
  fetchStatus: FetchStatus | null;
}

export enum ActionTypes {
  FETCH_LATEST_MOVIE_START = '[movie] fetch latest movie start',
  FETCH_LATEST_MOVIE_SUCCESS = '[movie] fetch latest movie success',
  FETCH_LATEST_MOVIE_FAILURE = '[movie] fetch latest movie failure',
}

export interface IMovie {
  id: number;
  imdb_id: string;
  original_title: string;
  overview: string;
  backdrop_path: string | null;
  poster_path: string | null;
  budget: number;
  genres: IGenres;
  release_date: string;
  runtime: number;
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
