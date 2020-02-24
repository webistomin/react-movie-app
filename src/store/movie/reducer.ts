import { ActionTypes, IFetchLatestMovieActions, IMovieInterface } from 'store/movie/types';
import { FetchStatus } from 'store/types';

const initialState: IMovieInterface = {
  latestMovie: null,
  fetchStatus: null,
};

function reducer(state: IMovieInterface = initialState, action: IFetchLatestMovieActions): IMovieInterface {
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
