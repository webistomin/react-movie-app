import { Action } from 'redux';
import { FetchStatus } from 'store/types';

export interface IMovieInterface {
  popularMovie: IPopularMovies | null;
}

export interface IMovieStateInterface extends IMovieInterface {
  fetchStatus: FetchStatus | null;
}

export enum ActionTypes {
  FETCH_POPULAR_MOVIES_START = '[movie] fetch popular movies start',
  FETCH_POPULAR_MOVIES_SUCCESS = '[movie] fetch popular movies success',
  FETCH_POPULAR_MOVIES_FAILURE = '[movie] fetch popular movies failure',
}

export interface IPopularMovies {
  page: number;
  total_results: number;
  total_pages: number;
  results: Array<IMovie>;
}

export interface IMovie {
  poster_path: string | null;
  id: string | number;
  title: string | null;
  genre_ids: Array<number>;
  vote_average: number | null;
  overview: string | null;
  release_date: string | null;
}

export interface IFetchPopularMoviesStartAction extends Action {
  type: ActionTypes.FETCH_POPULAR_MOVIES_START;
}

export interface IFetchPopularMoviesSuccessAction extends Action {
  type: ActionTypes.FETCH_POPULAR_MOVIES_SUCCESS;
  payload: IMovieInterface;
}

export interface IFetchPopularMoviesFailureAction extends Action {
  type: ActionTypes.FETCH_POPULAR_MOVIES_FAILURE;
}

export type IFetchPopularMoviesActions =
  | IFetchPopularMoviesStartAction
  | IFetchPopularMoviesSuccessAction
  | IFetchPopularMoviesFailureAction;
