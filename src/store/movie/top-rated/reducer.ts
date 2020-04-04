import { ActionTypes, IFetchTopRatedMoviesActions, ITopRatedMoviesState } from 'store/movie/top-rated/types';
import { FetchStatus } from 'common/types/fetch-status';

const initialState: ITopRatedMoviesState = {
  topRatedMovies: null,
  fetchStatus: null,
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
      return {
        ...state,
        topRatedMovies: action.payload,
        fetchStatus: FetchStatus.SUCCESS,
      };
    case ActionTypes.FETCH_TOP_RATED_MOVIES_FAILURE:
      return {
        ...state,
        fetchStatus: FetchStatus.FAILURE,
      };
    default:
      return state;
  }
}

export default reducer;
