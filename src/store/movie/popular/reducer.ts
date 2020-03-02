import { ActionTypes, IFetchPopularMoviesActions, IPopularMoviesState } from 'store/movie/popular/types';
import { FetchStatus } from 'common/types/fetch-status';

const initialState: IPopularMoviesState = {
  popularMovie: null,
  fetchStatus: null,
};

function reducer(state: IPopularMoviesState = initialState, action: IFetchPopularMoviesActions): IPopularMoviesState {
  switch (action.type) {
    case ActionTypes.FETCH_POPULAR_MOVIES_START:
      return {
        ...state,
        fetchStatus: FetchStatus.PENDING,
      };
    case ActionTypes.FETCH_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        popularMovie: action.payload,
        fetchStatus: FetchStatus.SUCCESS,
      };
    case ActionTypes.FETCH_POPULAR_MOVIES_FAILURE:
      return {
        ...state,
        fetchStatus: FetchStatus.FAILURE,
      };
    default:
      return state;
  }
}

export default reducer;
