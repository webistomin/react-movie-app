import { ActionTypes, ISearchActions, ISearchState } from 'store/search/types';
import { FetchStatus } from 'store/types';

const initialState: ISearchState = {
  searchQuery: '',
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
      return {
        ...state,
        searchResult: action.payload,
        fetchStatus: FetchStatus.SUCCESS,
      };
    default:
      return state;
  }
}

export default reducer;
