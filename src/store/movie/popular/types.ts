import { Action } from 'redux';
import { FetchStatus } from 'store/types';
import { ISearch } from 'common/types/search';
import { IMovie } from 'common/types/movie';

export interface IPopularMoviesState {
  popularMovie: ISearch<IMovie> | null;
  fetchStatus: FetchStatus | null;
}

export enum ActionTypes {
  FETCH_POPULAR_MOVIES_START = '[movie] fetch popular movies start',
  FETCH_POPULAR_MOVIES_SUCCESS = '[movie] fetch popular movies success',
  FETCH_POPULAR_MOVIES_FAILURE = '[movie] fetch popular movies failure',
}

export interface IFetchPopularMoviesStartAction extends Action {
  type: ActionTypes.FETCH_POPULAR_MOVIES_START;
}

export interface IFetchPopularMoviesSuccessAction extends Action {
  type: ActionTypes.FETCH_POPULAR_MOVIES_SUCCESS;
  payload: ISearch<IMovie>;
}

export interface IFetchPopularMoviesFailureAction extends Action {
  type: ActionTypes.FETCH_POPULAR_MOVIES_FAILURE;
}

export type IFetchPopularMoviesActions =
  | IFetchPopularMoviesStartAction
  | IFetchPopularMoviesSuccessAction
  | IFetchPopularMoviesFailureAction;
