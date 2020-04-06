import { ActionTypes, ISearchActions, ISearchState } from 'store/search/types';
import { FetchStatus } from 'common/types/fetch-status';

const initialState: ISearchState = {
  searchQuery: '',
  searchPage: 1,
  isSearchBarVisible: false,
  searchResult: null,
  fetchStatus: null,
};

function reducer(state: ISearchState = initialState, action: ISearchActions): ISearchState {
  switch (action.type) {
    case ActionTypes.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case ActionTypes.SET_SEARCH_PAGE:
      return {
        ...state,
        searchPage: action.payload,
      };
    case ActionTypes.CLEAR_SEARCH_PAGE:
      return {
        ...state,
        searchPage: 1,
      };
    case ActionTypes.SET_SEARCH_BAR_VISIBILITY:
      return {
        ...state,
        isSearchBarVisible: action.payload,
      };
    case ActionTypes.FETCH_SEARCH_CONTENT_START:
      return {
        ...state,
        fetchStatus: FetchStatus.PENDING,
      };
    case ActionTypes.FETCH_SEARCH_CONTENT_SUCCESS:
      const { shouldConcat } = action.payload;

      if (shouldConcat && state.searchResult) {
        return {
          ...state,
          searchResult: {
            ...action.payload.movies,
            results: [...state.searchResult.results, ...action.payload.movies.results],
          },
          fetchStatus: FetchStatus.SUCCESS,
        };
      }

      return {
        ...state,
        searchResult: action.payload.movies,
        fetchStatus: FetchStatus.SUCCESS,
      };

    default:
      return state;
  }
}

export default reducer;
