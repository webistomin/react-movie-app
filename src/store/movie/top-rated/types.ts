import { ISearch } from 'common/types/search';
import { IMovie } from 'common/types/movie';
import { FetchStatus } from 'common/types/fetch-status';
import { Action } from 'redux';

export interface ITopRatedMoviesState {
  topRatedMovies: ISearch<IMovie> | null;
  fetchStatus: FetchStatus | null;
}

export enum ActionTypes {
  FETCH_TOP_RATED_MOVIES_START = '[movie] fetch top rated movies start',
  FETCH_TOP_RATED_MOVIES_SUCCESS = '[movie] fetch top rated movies success',
  FETCH_TOP_RATED_MOVIES_FAILURE = '[movie] fetch top rated movies failure',
}

export interface IFetchTopRatedMoviesStartAction extends Action {
  type: ActionTypes.FETCH_TOP_RATED_MOVIES_START;
}

export interface IFetchTopRatedMoviesSuccessAction extends Action {
  type: ActionTypes.FETCH_TOP_RATED_MOVIES_SUCCESS;
  payload: ISearch<IMovie>;
}

export interface IFetchTopRatedMoviesFailureAction extends Action {
  type: ActionTypes.FETCH_TOP_RATED_MOVIES_FAILURE;
}

export type IFetchTopRatedMoviesActions =
  | IFetchTopRatedMoviesStartAction
  | IFetchTopRatedMoviesSuccessAction
  | IFetchTopRatedMoviesFailureAction;
