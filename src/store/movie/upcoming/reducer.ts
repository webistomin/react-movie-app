import { ActionTypes, IFetchUpcomingMoviesActions, IUpcomingMoviesState } from 'store/movie/upcoming/types';
import { FetchStatus } from 'common/types/fetch-status';

const initialState: IUpcomingMoviesState = {
  upcomingMovies: null,
  fetchStatus: null,
};

function reducer(
  state: IUpcomingMoviesState = initialState,
  action: IFetchUpcomingMoviesActions
): IUpcomingMoviesState {
  switch (action.type) {
    case ActionTypes.FETCH_UPCOMING_MOVIES_START:
      return {
        ...state,
        fetchStatus: FetchStatus.PENDING,
      };
    case ActionTypes.FETCH_UPCOMING_MOVIES_SUCCESS:
      return {
        ...state,
        upcomingMovies: action.payload,
        fetchStatus: FetchStatus.SUCCESS,
      };
    case ActionTypes.FETCH_UPCOMING_MOVIES_FAILURE:
      return {
        ...state,
        fetchStatus: FetchStatus.FAILURE,
      };
    default:
      return state;
  }
}

export default reducer;
