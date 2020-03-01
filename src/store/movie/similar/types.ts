import { Action } from 'redux';
import { FetchStatus } from 'store/types';

export interface IMovieInterface {
  similarMovie: ISimilarMovies | null;
}

export interface IMovieStateInterface extends IMovieInterface {
  fetchStatus: FetchStatus | null;
}

export enum ActionTypes {
  FETCH_SIMILAR_MOVIES_START = '[movie] fetch similar movies start',
  FETCH_SIMILAR_MOVIES_SUCCESS = '[movie] fetch similar movies success',
  FETCH_SIMILAR_MOVIES_FAILURE = '[movie] fetch similar movies failure',
}

export interface ISimilarMovies {
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

export interface IFetchSimilarMoviesStartAction extends Action {
  type: ActionTypes.FETCH_SIMILAR_MOVIES_START;
  payload: number;
}

export interface IFetchSimilarMoviesSuccessAction extends Action {
  type: ActionTypes.FETCH_SIMILAR_MOVIES_SUCCESS;
  payload: IMovieInterface;
}

export interface IFetchSimilarMoviesFailureAction extends Action {
  type: ActionTypes.FETCH_SIMILAR_MOVIES_FAILURE;
}

export type IFetchSimilarMoviesActions =
  | IFetchSimilarMoviesStartAction
  | IFetchSimilarMoviesSuccessAction
  | IFetchSimilarMoviesFailureAction;
