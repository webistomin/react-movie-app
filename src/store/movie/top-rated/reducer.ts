import { ActionTypes, IFetchTopRatedMoviesActions, ITopRatedMoviesState } from 'store/movie/top-rated/types';
import { FetchStatus } from 'common/types/fetch-status';

const initialState: ITopRatedMoviesState = {
  topRatedMovies: null,
  fetchStatus: null,
  topRatedSearchPage: 1,
};

function reducer(
  state: ITopRatedMoviesState = initialState,
  action: IFetchTopRatedMoviesActions
): ITopRatedMoviesState {
  switch (action.type) {
    case ActionTypes.FETCH_TOP_RATED_MOVIES_START:
      return {
        ...state,
        fetchStatus: FetchStatus.PENDING,
      };
    case ActionTypes.FETCH_TOP_RATED_MOVIES_SUCCESS:
      const { shouldConcat } = action.payload;

      if (shouldConcat && state.topRatedMovies) {
        return {
          ...state,
          topRatedMovies: {
            ...action.payload.movies,
            results: [...state.topRatedMovies.results, ...action.payload.movies.results],
          },
          fetchStatus: FetchStatus.SUCCESS,
        };
      }

      return {
        ...state,
        topRatedMovies: action.payload.movies,
        fetchStatus: FetchStatus.SUCCESS,
      };
    case ActionTypes.FETCH_TOP_RATED_MOVIES_FAILURE:
      return {
        ...state,
        fetchStatus: FetchStatus.FAILURE,
      };
    case ActionTypes.SET_TOP_RATED_SEARCH_PAGE:
      return {
        ...state,
        topRatedSearchPage: action.payload,
      };
    case ActionTypes.CLEAR_TOP_RATED_SEARCH_PAGE:
      return {
        ...state,
        topRatedSearchPage: 1,
      };
    default:
      return state;
  }
}

export default reducer;
