import { ActionTypes } from 'store/search/types';

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
