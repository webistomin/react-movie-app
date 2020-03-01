import { ActionTypes, IFetchSimilarMoviesActions, IMovieStateInterface } from 'store/movie/similar/types';
import { FetchStatus } from 'store/types';

const initialState: IMovieStateInterface = {
  similarMovie: null,
  fetchStatus: null,
};

function reducer(state: IMovieStateInterface = initialState, action: IFetchSimilarMoviesActions): IMovieStateInterface {
  switch (action.type) {
    case ActionTypes.FETCH_SIMILAR_MOVIES_START:
      return {
        ...state,
        fetchStatus: FetchStatus.PENDING,
      };
    case ActionTypes.FETCH_SIMILAR_MOVIES_SUCCESS:
      return {
        ...state,
        similarMovie: action.payload.similarMovie,
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
