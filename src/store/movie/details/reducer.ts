import { ActionTypes, IFetchMovieDetailsActions, IMovieDetailsState } from 'store/movie/details/types';
import { FetchStatus } from 'common/types/fetch-status';

const initialState: IMovieDetailsState = {
  movieDetails: null,
  fetchStatus: null,
};

function reducer(state: IMovieDetailsState = initialState, action: IFetchMovieDetailsActions): IMovieDetailsState {
  switch (action.type) {
    case ActionTypes.FETCH_MOVIE_DETAILS_START:
      return {
        ...state,
        fetchStatus: FetchStatus.PENDING,
      };
    case ActionTypes.FETCH_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movieDetails: action.payload,
        fetchStatus: FetchStatus.SUCCESS,
      };
    case ActionTypes.FETCH_MOVIE_DETAILS_FAILURE:
      return {
        ...state,
        fetchStatus: FetchStatus.FAILURE,
      };
    case ActionTypes.CLEAR_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: null,
        fetchStatus: null,
      };
    default:
      return state;
  }
}

export default reducer;
