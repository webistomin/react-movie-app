import { Action } from 'redux';
import { ISearch } from 'common/types/search';
import { IMovie } from 'common/types/movie';
import { FetchStatus } from 'common/types/fetch-status';

export interface ISearchState {
  searchQuery: string;
  isSearchBarVisible: boolean;
  searchResult: ISearch<IMovie> | null;
  fetchStatus: FetchStatus | null;
}

export enum ActionTypes {
  SET_SEARCH_QUERY = '[search] set search query',
  SET_SEARCH_BAR_VISIBILITY = '[search] set search bar visibility',
  FETCH_SEARCH_CONTENT_START = '[search] fetch search content start',
  FETCH_SEARCH_CONTENT_SUCCESS = '[search] fetch search content success',
  FETCH_SEARCH_CONTENT_FAILURE = '[search] fetch search content failure',
}

export interface ISearchQueryAction extends Action {
  type: ActionTypes.SET_SEARCH_QUERY;
  payload: string;
}

export interface ISearchBarAction extends Action {
  type: ActionTypes.SET_SEARCH_BAR_VISIBILITY;
  payload: boolean;
}

export interface IFetchSearchContentStartAction extends Action {
  type: ActionTypes.FETCH_SEARCH_CONTENT_START;
}

export interface IFetchSearchContentSuccessAction extends Action {
  type: ActionTypes.FETCH_SEARCH_CONTENT_SUCCESS;
  payload: ISearch<IMovie>;
}

export interface IFetchSearchContentFailureAction extends Action {
  type: ActionTypes.FETCH_SEARCH_CONTENT_FAILURE;
}

export type ISearchActions =
  | ISearchQueryAction
  | ISearchBarAction
  | IFetchSearchContentStartAction
  | IFetchSearchContentSuccessAction
  | IFetchSearchContentFailureAction;
