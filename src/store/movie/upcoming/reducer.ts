import { ActionTypes, IFetchUpcomingMoviesActions, IUpcomingMoviesState } from 'store/movie/upcoming/types';
import { FetchStatus } from 'common/types/fetch-status';

const initialState: IUpcomingMoviesState = {
  upcomingMovies: null,
  fetchStatus: null,
  upcomingSearchPage: 1,
};

function reducer(
  state: IUpcomingMoviesState = initialState,
  action: IFetchUpcomingMoviesActions
): IUpcomingMoviesState {
  switch (action.type) {
    case ActionTypes.FETCH_UPCOMING_MOVIES_START:
      return {
        ...state,
        fetchStatus: FetchStatus.PENDING,
      };
    case ActionTypes.FETCH_UPCOMING_MOVIES_SUCCESS:
      const { shouldConcat } = action.payload;

      if (shouldConcat && state.upcomingMovies) {
        return {
          ...state,
          upcomingMovies: {
            ...action.payload.movies,
            results: [...state.upcomingMovies.results, ...action.payload.movies.results],
          },
          fetchStatus: FetchStatus.SUCCESS,
        };
      }

      return {
        ...state,
        upcomingMovies: action.payload.movies,
        fetchStatus: FetchStatus.SUCCESS,
      };
    case ActionTypes.FETCH_UPCOMING_MOVIES_FAILURE:
      return {
        ...state,
        fetchStatus: FetchStatus.FAILURE,
      };
    case ActionTypes.SET_UPCOMING_SEARCH_PAGE:
      return {
        ...state,
        upcomingSearchPage: action.payload,
      };
    case ActionTypes.CLEAR_UPCOMING_SEARCH_PAGE:
      return {
        ...state,
        upcomingSearchPage: 1,
      };
    default:
      return state;
  }
}

export default reducer;
