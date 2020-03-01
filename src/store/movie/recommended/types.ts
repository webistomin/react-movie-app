import { Action } from 'redux';
import { FetchStatus } from 'store/types';

export interface IMovieInterface {
  recommendedMovie: IRecommendedMovies | null;
}

export interface IMovieStateInterface extends IMovieInterface {
  fetchStatus: FetchStatus | null;
}

export enum ActionTypes {
  FETCH_RECOMMENDED_MOVIES_START = '[movie] fetch recommended movies start',
  FETCH_RECOMMENDED_MOVIES_SUCCESS = '[movie] fetch recommended movies success',
  FETCH_RECOMMENDED_MOVIES_FAILURE = '[movie] fetch recommended movies failure',
}

export interface IRecommendedMovies {
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

export interface IFetchRecommendedMoviesStartAction extends Action {
  type: ActionTypes.FETCH_RECOMMENDED_MOVIES_START;
  payload: number;
}

export interface IFetchRecommendedMoviesSuccessAction extends Action {
  type: ActionTypes.FETCH_RECOMMENDED_MOVIES_SUCCESS;
  payload: IMovieInterface;
}

export interface IFetchRecommendedMoviesFailureAction extends Action {
  type: ActionTypes.FETCH_RECOMMENDED_MOVIES_FAILURE;
}

export type IFetchRecommendedMoviesActions =
  | IFetchRecommendedMoviesStartAction
  | IFetchRecommendedMoviesSuccessAction
  | IFetchRecommendedMoviesFailureAction;
