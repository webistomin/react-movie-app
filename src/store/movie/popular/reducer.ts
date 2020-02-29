import { ActionTypes, IFetchPopularMoviesActions, IMovieStateInterface } from 'store/movie/popular/types';
import { FetchStatus } from 'store/types';

const initialState: IMovieStateInterface = {
  popularMovies: null,
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
        popularMovies: action.payload.popularMovies,
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
