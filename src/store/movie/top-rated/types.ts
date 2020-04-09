import { ISearch } from 'common/types/search';
import { IMovie } from 'common/types/movie';
import { FetchStatus } from 'common/types/fetch-status';
import { Action } from 'redux';

export interface ITopRatedMoviesState {
  topRatedMovies: ISearch<IMovie> | null;
  fetchStatus: FetchStatus | null;
  topRatedSearchPage: number;
}

export enum ActionTypes {
  FETCH_TOP_RATED_MOVIES_START = '[movie] fetch top rated movies start',
  FETCH_TOP_RATED_MOVIES_SUCCESS = '[movie] fetch top rated movies success',
  FETCH_TOP_RATED_MOVIES_FAILURE = '[movie] fetch top rated movies failure',

  SET_TOP_RATED_SEARCH_PAGE = '[movie] set top rated search page',
  CLEAR_TOP_RATED_SEARCH_PAGE = '[movie] clear top rated search page',
}

export interface IFetchTopRatedMoviesStartAction extends Action {
  type: ActionTypes.FETCH_TOP_RATED_MOVIES_START;
}

export interface IFetchTopRatedMoviesSuccessAction extends Action {
  type: ActionTypes.FETCH_TOP_RATED_MOVIES_SUCCESS;
  payload: {
    movies: ISearch<IMovie>;
    shouldConcat?: boolean;
  };
}

export interface IFetchTopRatedMoviesFailureAction extends Action {
  type: ActionTypes.FETCH_TOP_RATED_MOVIES_FAILURE;
}

export interface IClearTopRatedSearchPage extends Action {
  type: ActionTypes.CLEAR_TOP_RATED_SEARCH_PAGE;
}

export interface ISetTopRatedSearchPage extends Action {
  type: ActionTypes.SET_TOP_RATED_SEARCH_PAGE;
  payload: ITopRatedMoviesState['topRatedSearchPage'];
}

export type IFetchTopRatedMoviesActions =
  | IFetchTopRatedMoviesStartAction
  | IFetchTopRatedMoviesSuccessAction
  | IFetchTopRatedMoviesFailureAction
  | IClearTopRatedSearchPage
  | ISetTopRatedSearchPage;
