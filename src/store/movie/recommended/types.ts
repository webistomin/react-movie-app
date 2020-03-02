import { Action } from 'redux';
import { FetchStatus } from 'common/types/fetch-status';
import { ISearch } from 'common/types/search';
import { IMovie } from 'common/types/movie';

export interface IRecommendedMoviesState {
  recommendedMovie: ISearch<IMovie> | null;
  fetchStatus: FetchStatus | null;
}

export enum ActionTypes {
  FETCH_RECOMMENDED_MOVIES_START = '[movie] fetch recommended movies start',
  FETCH_RECOMMENDED_MOVIES_SUCCESS = '[movie] fetch recommended movies success',
  FETCH_RECOMMENDED_MOVIES_FAILURE = '[movie] fetch recommended movies failure',
}

export interface IFetchRecommendedMoviesStartAction extends Action {
  type: ActionTypes.FETCH_RECOMMENDED_MOVIES_START;
  payload: number;
}

export interface IFetchRecommendedMoviesSuccessAction extends Action {
  type: ActionTypes.FETCH_RECOMMENDED_MOVIES_SUCCESS;
  payload: ISearch<IMovie>;
}

export interface IFetchRecommendedMoviesFailureAction extends Action {
  type: ActionTypes.FETCH_RECOMMENDED_MOVIES_FAILURE;
}

export type IFetchRecommendedMoviesActions =
  | IFetchRecommendedMoviesStartAction
  | IFetchRecommendedMoviesSuccessAction
  | IFetchRecommendedMoviesFailureAction;
