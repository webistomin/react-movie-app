import { ActionTypes, IFetchNowPlayingMoviesActions, INowPlayingMoviesState } from 'store/movie/now-playing/types';
import { FetchStatus } from 'common/types/fetch-status';

const initialState: INowPlayingMoviesState = {
  nowPlayingMovies: null,
  fetchStatus: null,
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
      return {
        ...state,
        nowPlayingMovies: action.payload,
        fetchStatus: FetchStatus.SUCCESS,
      };
    case ActionTypes.FETCH_NOW_PLAYING_MOVIES_FAILURE:
      return {
        ...state,
        fetchStatus: FetchStatus.FAILURE,
      };
    default:
      return state;
  }
}

export default reducer;
