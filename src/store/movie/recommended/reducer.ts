import { ActionTypes, IFetchRecommendedMoviesActions, IRecommendedMoviesState } from 'store/movie/recommended/types';
import { FetchStatus } from 'common/types/fetch-status';

const initialState: IRecommendedMoviesState = {
  recommendedMovie: null,
  fetchStatus: null,
};

function reducer(
  state: IRecommendedMoviesState = initialState,
  action: IFetchRecommendedMoviesActions
): IRecommendedMoviesState {
  switch (action.type) {
    case ActionTypes.FETCH_RECOMMENDED_MOVIES_START:
      return {
        ...state,
        fetchStatus: FetchStatus.PENDING,
      };
    case ActionTypes.FETCH_RECOMMENDED_MOVIES_SUCCESS:
      return {
        ...state,
        recommendedMovie: action.payload,
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
