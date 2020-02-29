import { ApplicationState } from 'store/store';

export function getSearchQuery(state: ApplicationState) {
  return state.search.searchQuery;
}

export function getSearchBarVisibility(state: ApplicationState) {
  return state.search.isSearchBarVisible;
}