import { ISearch } from 'common/types/search';
import { IMovie } from 'common/types/movie';
import { FetchStatus } from 'common/types/fetch-status';
import { Action } from 'redux';

export interface IUpcomingMoviesState {
  upcomingMovies: ISearch<IMovie> | null;
  fetchStatus: FetchStatus | null;
}

export enum ActionTypes {
  FETCH_UPCOMING_MOVIES_START = '[movie] fetch upcoming movies start',
  FETCH_UPCOMING_MOVIES_SUCCESS = '[movie] fetch upcoming movies success',
  FETCH_UPCOMING_MOVIES_FAILURE = '[movie] fetch upcoming movies failure',
}

export interface IFetchUpcomingMoviesStartAction extends Action {
  type: ActionTypes.FETCH_UPCOMING_MOVIES_START;
}

export interface IFetchUpcomingMoviesSuccessAction extends Action {
  type: ActionTypes.FETCH_UPCOMING_MOVIES_SUCCESS;
  payload: ISearch<IMovie>;
}

export interface IFetchUpcomingMoviesFailureAction extends Action {
  type: ActionTypes.FETCH_UPCOMING_MOVIES_FAILURE;
}

export type IFetchUpcomingMoviesActions =
  | IFetchUpcomingMoviesStartAction
  | IFetchUpcomingMoviesSuccessAction
  | IFetchUpcomingMoviesFailureAction;
