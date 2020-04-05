import { ApplicationState } from 'store/store';

export function getSearchQuery(state: ApplicationState) {
  return state.search.searchQuery;
}

export function getSearchPage(state: ApplicationState) {
  return state.search.searchPage;
}

export function getSearchBarVisibility(state: ApplicationState) {
  return state.search.isSearchBarVisible;
}

export function getSearchContent(state: ApplicationState) {
  return state.search.searchResult;
}

export function getSearchStatus(state: ApplicationState) {
  return state.search.fetchStatus;
}

export function hasMorePages(state: ApplicationState) {
  if (state.search.searchResult) {
    return state.search.searchPage < state.search.searchResult.total_pages;
  }

  return false;
}
