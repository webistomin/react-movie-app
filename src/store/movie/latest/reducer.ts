import { ActionTypes, IFetchLatestMovieActions, ILatestMovieState } from 'store/movie/latest/types';
import { FetchStatus } from 'common/types/fetch-status';

const initialState: ILatestMovieState = {
  latestMovie: null,
  fetchStatus: null,
};

function reducer(state: ILatestMovieState = initialState, action: IFetchLatestMovieActions): ILatestMovieState {
  switch (action.type) {
    case ActionTypes.FETCH_LATEST_MOVIE_START:
      return {
        ...state,
        fetchStatus: FetchStatus.PENDING,
      };
    case ActionTypes.FETCH_LATEST_MOVIE_SUCCESS:
      return {
        ...state,
        latestMovie: action.payload,
        fetchStatus: FetchStatus.SUCCESS,
      };
    case ActionTypes.FETCH_LATEST_MOVIE_FAILURE:
      return {
        ...state,
        fetchStatus: FetchStatus.FAILURE,
      };
    default:
      return state;
  }
}

export default reducer;
