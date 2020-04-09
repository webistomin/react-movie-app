import { ISearch } from 'common/types/search';
import { IMovie } from 'common/types/movie';
import { FetchStatus } from 'common/types/fetch-status';
import { Action } from 'redux';

export interface IUpcomingMoviesState {
  upcomingMovies: ISearch<IMovie> | null;
  fetchStatus: FetchStatus | null;
  upcomingSearchPage: number;
}

export enum ActionTypes {
  FETCH_UPCOMING_MOVIES_START = '[movie] fetch upcoming movies start',
  FETCH_UPCOMING_MOVIES_SUCCESS = '[movie] fetch upcoming movies success',
  FETCH_UPCOMING_MOVIES_FAILURE = '[movie] fetch upcoming movies failure',

  SET_UPCOMING_SEARCH_PAGE = '[movie] set upcoming search page',
  CLEAR_UPCOMING_SEARCH_PAGE = '[movie] clear upcoming search page',
}

export interface IFetchUpcomingMoviesStartAction extends Action {
  type: ActionTypes.FETCH_UPCOMING_MOVIES_START;
}

export interface IFetchUpcomingMoviesSuccessAction extends Action {
  type: ActionTypes.FETCH_UPCOMING_MOVIES_SUCCESS;
  payload: {
    movies: ISearch<IMovie>;
    shouldConcat?: boolean;
  };
}

export interface IFetchUpcomingMoviesFailureAction extends Action {
  type: ActionTypes.FETCH_UPCOMING_MOVIES_FAILURE;
}

export interface IClearUpcomingSearchPage extends Action {
  type: ActionTypes.CLEAR_UPCOMING_SEARCH_PAGE;
}

export interface ISetUpcomingSearchPage extends Action {
  type: ActionTypes.SET_UPCOMING_SEARCH_PAGE;
  payload: IUpcomingMoviesState['upcomingSearchPage'];
}

export type IFetchUpcomingMoviesActions =
  | IFetchUpcomingMoviesStartAction
  | IFetchUpcomingMoviesSuccessAction
  | IFetchUpcomingMoviesFailureAction
  | IClearUpcomingSearchPage
  | ISetUpcomingSearchPage;
