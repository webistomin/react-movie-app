import { ActionTypes, IFetchNowPlayingMoviesActions, INowPlayingMoviesState } from 'store/movie/now-playing/types';
import { FetchStatus } from 'common/types/fetch-status';

const initialState: INowPlayingMoviesState = {
  nowPlayingMovies: null,
  fetchStatus: null,
  nowPlayingSearchPage: 1,
};

function reducer(
  state: INowPlayingMoviesState = initialState,
  action: IFetchNowPlayingMoviesActions
): INowPlayingMoviesState {
  switch (action.type) {
    case ActionTypes.FETCH_NOW_PLAYING_MOVIES_START:
      return {
        ...state,
        fetchStatus: FetchStatus.PENDING,
      };
    case ActionTypes.FETCH_NOW_PLAYING_MOVIES_SUCCESS:
      const { shouldConcat } = action.payload;

      if (shouldConcat && state.nowPlayingMovies) {
        return {
          ...state,
          nowPlayingMovies: {
            ...action.payload.movies,
            results: [...state.nowPlayingMovies.results, ...action.payload.movies.results],
          },
          fetchStatus: FetchStatus.SUCCESS,
        };
      }

      return {
        ...state,
        nowPlayingMovies: action.payload.movies,
        fetchStatus: FetchStatus.SUCCESS,
      };
    case ActionTypes.FETCH_NOW_PLAYING_MOVIES_FAILURE:
      return {
        ...state,
        fetchStatus: FetchStatus.FAILURE,
      };
    case ActionTypes.SET_NOW_PLAYING_SEARCH_PAGE:
      return {
        ...state,
        nowPlayingSearchPage: action.payload,
      };
    case ActionTypes.CLEAR_NOW_PLAYING_SEARCH_PAGE:
      return {
        ...state,
        nowPlayingSearchPage: 1,
      };
    default:
      return state;
  }
}

export default reducer;
