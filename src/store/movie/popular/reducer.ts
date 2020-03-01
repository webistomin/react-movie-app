import { ActionTypes, IFetchPopularMoviesActions, IMovieStateInterface } from 'store/movie/popular/types';
import { FetchStatus } from 'store/types';

const initialState: IMovieStateInterface = {
  popularMovie: null,
  fetchStatus: null,
};

function reducer(state: IMovieStateInterface = initialState, action: IFetchPopularMoviesActions): IMovieStateInterface {
  switch (action.type) {
    case ActionTypes.FETCH_POPULAR_MOVIES_START:
      return {
        ...state,
        fetchStatus: FetchStatus.PENDING,
      };
    case ActionTypes.FETCH_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        popularMovie: action.payload.popularMovie,
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
