import { ActionTypes, IFetchSimilarMoviesActions, ISimilarMovieState } from 'store/movie/similar/types';
import { FetchStatus } from 'common/types/fetch-status';

const initialState: ISimilarMovieState = {
  similarMovie: null,
  fetchStatus: null,
};

function reducer(state: ISimilarMovieState = initialState, action: IFetchSimilarMoviesActions): ISimilarMovieState {
  switch (action.type) {
    case ActionTypes.FETCH_SIMILAR_MOVIES_START:
      return {
        ...state,
        fetchStatus: FetchStatus.PENDING,
      };
    case ActionTypes.FETCH_SIMILAR_MOVIES_SUCCESS:
      return {
        ...state,
        similarMovie: action.payload,
        fetchStatus: FetchStatus.SUCCESS,
      };
    case ActionTypes.FETCH_SIMILAR_MOVIES_FAILURE:
      return {
        ...state,
        fetchStatus: FetchStatus.FAILURE,
      };
    default:
      return state;
  }
}

export default reducer;
