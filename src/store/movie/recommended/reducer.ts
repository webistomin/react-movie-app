import { ActionTypes, IFetchRecommendedMoviesActions, IMovieStateInterface } from 'store/movie/recommended/types';
import { FetchStatus } from 'store/types';

const initialState: IMovieStateInterface = {
  recommendedMovies: null,
  fetchStatus: null,
};

function reducer(
  state: IMovieStateInterface = initialState,
  action: IFetchRecommendedMoviesActions
): IMovieStateInterface {
  switch (action.type) {
    case ActionTypes.FETCH_RECOMMENDED_MOVIES_START:
      return {
        ...state,
        fetchStatus: FetchStatus.PENDING,
      };
    case ActionTypes.FETCH_RECOMMENDED_MOVIES_SUCCESS:
      return {
        ...state,
        recommendedMovies: action.payload.recommendedMovies,
        fetchStatus: FetchStatus.SUCCESS,
      };
    case ActionTypes.FETCH_RECOMMENDED_MOVIES_FAILURE:
      return {
        ...state,
        fetchStatus: FetchStatus.FAILURE,
      };
    default:
      return state;
  }
}

export default reducer;
