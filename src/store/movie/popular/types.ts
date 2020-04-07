import { Action } from 'redux';
import { FetchStatus } from 'common/types/fetch-status';
import { ISearch } from 'common/types/search';
import { IMovie } from 'common/types/movie';

export interface IPopularMoviesState {
  popularMovie: ISearch<IMovie> | null;
  fetchStatus: FetchStatus | null;
  popularSearchPage: number;
}

export enum ActionTypes {
  FETCH_POPULAR_MOVIES_START = '[movie] fetch popular movies start',
  FETCH_POPULAR_MOVIES_SUCCESS = '[movie] fetch popular movies success',
  FETCH_POPULAR_MOVIES_FAILURE = '[movie] fetch popular movies failure',

  SET_POPULAR_SEARCH_PAGE = '[movie] set popular search page',
  CLEAR_POPULAR_SEARCH_PAGE = '[movie] clear popular search page',
}

export interface IFetchPopularMoviesStartAction extends Action {
  type: ActionTypes.FETCH_POPULAR_MOVIES_START;
}

export interface IFetchPopularMoviesSuccessAction extends Action {
  type: ActionTypes.FETCH_POPULAR_MOVIES_SUCCESS;
  payload: {
    movies: ISearch<IMovie>;
    shouldConcat?: boolean;
  };
}

export interface IFetchPopularMoviesFailureAction extends Action {
  type: ActionTypes.FETCH_POPULAR_MOVIES_FAILURE;
}

export interface IClearPopularSearchPage extends Action {
  type: ActionTypes.CLEAR_POPULAR_SEARCH_PAGE;
}

export interface ISetPopularSearchPage extends Action {
  type: ActionTypes.SET_POPULAR_SEARCH_PAGE;
  payload: IPopularMoviesState['popularSearchPage'];
}

export type IFetchPopularMoviesActions =
  | IFetchPopularMoviesStartAction
  | IFetchPopularMoviesSuccessAction
  | IFetchPopularMoviesFailureAction
  | IClearPopularSearchPage
  | ISetPopularSearchPage;
