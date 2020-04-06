import { Action } from 'redux';
import { ISearch } from 'common/types/search';
import { IMovie } from 'common/types/movie';
import { FetchStatus } from 'common/types/fetch-status';

export interface ISearchState {
  searchQuery: string;
  searchPage: number;
  isSearchBarVisible: boolean;
  searchResult: ISearch<IMovie> | null;
  fetchStatus: FetchStatus | null;
}

export enum ActionTypes {
  SET_SEARCH_QUERY = '[search] set search query',
  SET_SEARCH_PAGE = '[search] set search page',
  CLEAR_SEARCH_PAGE = '[search] clear search page',
  SET_SEARCH_BAR_VISIBILITY = '[search] set search bar visibility',
  FETCH_SEARCH_CONTENT_START = '[search] fetch search content start',
  FETCH_SEARCH_CONTENT_SUCCESS = '[search] fetch search content success',
  FETCH_SEARCH_CONTENT_FAILURE = '[search] fetch search content failure',
}

export interface ISearchQueryAction extends Action {
  type: ActionTypes.SET_SEARCH_QUERY;
  payload: string;
}

export interface ISearchPageAction extends Action {
  type: ActionTypes.SET_SEARCH_PAGE;
  payload: number;
}

export interface IClearPageAction extends Action {
  type: ActionTypes.CLEAR_SEARCH_PAGE;
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
  payload: {
    movies: ISearch<IMovie>;
    shouldConcat: boolean;
  };
}

export interface IFetchSearchContentFailureAction extends Action {
  type: ActionTypes.FETCH_SEARCH_CONTENT_FAILURE;
}

export type ISearchActions =
  | ISearchQueryAction
  | ISearchPageAction
  | IClearPageAction
  | ISearchBarAction
  | IFetchSearchContentStartAction
  | IFetchSearchContentSuccessAction
  | IFetchSearchContentFailureAction;
