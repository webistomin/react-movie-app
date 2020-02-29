import { ActionTypes, IFetchMovieDetailsActions, IMovieDetailsStateInterface } from 'store/movie/details/types';
import { FetchStatus } from 'store/types';

const initialState: IMovieDetailsStateInterface = {
  movieDetails: null,
  fetchStatus: null,
};

function reducer(
  state: IMovieDetailsStateInterface = initialState,
  action: IFetchMovieDetailsActions
): IMovieDetailsStateInterface {
  switch (action.type) {
    case ActionTypes.FETCH_MOVIE_DETAILS_START:
      return {
        ...state,
        fetchStatus: FetchStatus.PENDING,
      };
    case ActionTypes.FETCH_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movieDetails: action.payload.movieDetails,
        fetchStatus: FetchStatus.SUCCESS,
      };
    case ActionTypes.FETCH_MOVIE_DETAILS_FAILURE:
      return {
        ...state,
        fetchStatus: FetchStatus.FAILURE,
      };
    default:
      return state;
  }
}

export default reducer;
