import { Action } from 'redux';

export interface ISearchInterface {
  isSearchBarVisible: boolean;
  searchQuery: string;
}

export enum ActionTypes {
  SET_SEARCH_QUERY = '[search] set search query',
  SET_SEARCH_BAR_VISIBILITY = '[search] set search bar visiblity',
}

export interface ISearchQueryAction extends Action {
  type: ActionTypes.SET_SEARCH_QUERY;
  payload: string;
}

export interface ISearchBarAction extends Action {
  type: ActionTypes.SET_SEARCH_BAR_VISIBILITY;
  payload: boolean;
}

export type ISearchActions = ISearchQueryAction | ISearchBarAction;
