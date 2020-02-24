import { ActionTypes, ISearchActions, ISearchInterface } from 'store/search/types';

const initialState: ISearchInterface = {
  searchQuery: '',
  isSearchBarVisible: false,
};

function reducer(state: ISearchInterface = initialState, action: ISearchActions): ISearchInterface {
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
    default:
      return state;
  }
}

export default reducer;
