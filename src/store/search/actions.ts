import { ActionTypes } from 'store/search/types';
import { ISearch } from 'common/types/search';
import { IMovie } from 'common/types/movie';

export function toggleSearchBarVisibility(payload: boolean) {
  return {
    type: ActionTypes.SET_SEARCH_BAR_VISIBILITY,
    payload,
  };
}

export function setSearchQuery(payload: string) {
  return {
    type: ActionTypes.SET_SEARCH_QUERY,
    payload,
  };
}

export function fetchSearchContentStart() {
  return {
    type: ActionTypes.FETCH_SEARCH_CONTENT_START,
  };
}

export function fetchSearchContentSuccess(payload: ISearch<IMovie>) {
  return {
    type: ActionTypes.FETCH_SEARCH_CONTENT_SUCCESS,
    payload,
  };
}

export function fetchSearchContentFailure() {
  return {
    type: ActionTypes.FETCH_SEARCH_CONTENT_FAILURE,
  };
}
