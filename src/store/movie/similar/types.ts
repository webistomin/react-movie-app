import { Action } from 'redux';
import { FetchStatus } from 'common/types/fetch-status';
import { ISearch } from 'common/types/search';
import { IMovie } from 'common/types/movie';

export interface ISimilarMovieState {
  similarMovie: ISearch<IMovie> | null;
  fetchStatus: FetchStatus | null;
}

export enum ActionTypes {
  FETCH_SIMILAR_MOVIES_START = '[movie] fetch similar movies start',
  FETCH_SIMILAR_MOVIES_SUCCESS = '[movie] fetch similar movies success',
  FETCH_SIMILAR_MOVIES_FAILURE = '[movie] fetch similar movies failure',
}

export interface IFetchSimilarMoviesStartAction extends Action {
  type: ActionTypes.FETCH_SIMILAR_MOVIES_START;
  payload: number;
}

export interface IFetchSimilarMoviesSuccessAction extends Action {
  type: ActionTypes.FETCH_SIMILAR_MOVIES_SUCCESS;
  payload: ISearch<IMovie>;
}

export interface IFetchSimilarMoviesFailureAction extends Action {
  type: ActionTypes.FETCH_SIMILAR_MOVIES_FAILURE;
}

export type IFetchSimilarMoviesActions =
  | IFetchSimilarMoviesStartAction
  | IFetchSimilarMoviesSuccessAction
  | IFetchSimilarMoviesFailureAction;
