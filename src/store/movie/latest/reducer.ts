import { ActionTypes, IFetchLatestMovieActions, IMovieStateInterface } from 'store/movie/latest/types';
import { FetchStatus } from 'store/types';

const initialState: IMovieStateInterface = {
  latestMovie: null,
  fetchStatus: null,
};

function reducer(state: IMovieStateInterface = initialState, action: IFetchLatestMovieActions): IMovieStateInterface {
  switch (action.type) {
    case ActionTypes.FETCH_LATEST_MOVIE_START:
      return {
        ...state,
        fetchStatus: FetchStatus.PENDING,
      };
    case ActionTypes.FETCH_LATEST_MOVIE_SUCCESS:
      return {
        ...state,
        latestMovie: action.payload.latestMovie,
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
