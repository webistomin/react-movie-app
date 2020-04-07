import { ActionTypes, IFetchPopularMoviesActions, IPopularMoviesState } from 'store/movie/popular/types';
import { FetchStatus } from 'common/types/fetch-status';

const initialState: IPopularMoviesState = {
  popularSearchPage: 1,
  popularMovie: null,
  fetchStatus: null,
};

function reducer(state: IPopularMoviesState = initialState, action: IFetchPopularMoviesActions): IPopularMoviesState {
  switch (action.type) {
    case ActionTypes.FETCH_POPULAR_MOVIES_START:
      return {
        ...state,
        fetchStatus: FetchStatus.PENDING,
      };
    case ActionTypes.FETCH_POPULAR_MOVIES_SUCCESS:
      const { shouldConcat } = action.payload;

      if (shouldConcat && state.popularMovie) {
        return {
          ...state,
          popularMovie: {
            ...action.payload.movies,
            results: [...state.popularMovie.results, ...action.payload.movies.results],
          },
          fetchStatus: FetchStatus.SUCCESS,
        };
      }

      return {
        ...state,
        popularMovie: action.payload.movies,
        fetchStatus: FetchStatus.SUCCESS,
      };
    case ActionTypes.FETCH_POPULAR_MOVIES_FAILURE:
      return {
        ...state,
        fetchStatus: FetchStatus.FAILURE,
      };
    case ActionTypes.SET_POPULAR_SEARCH_PAGE:
      return {
        ...state,
        popularSearchPage: action.payload,
      };
    case ActionTypes.CLEAR_POPULAR_SEARCH_PAGE:
      return {
        ...state,
        popularSearchPage: 1,
      };
    default:
      return state;
  }
}

export default reducer;
