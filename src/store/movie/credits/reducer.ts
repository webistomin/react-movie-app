import { ActionTypes, IFetchMovieCreditsActions, IMovieCreditsState } from 'store/movie/credits/types';
import { FetchStatus } from 'common/types/fetch-status';

const initialState: IMovieCreditsState = {
  movieCredits: null,
  fetchStatus: null,
};

function reducer(state: IMovieCreditsState = initialState, action: IFetchMovieCreditsActions): IMovieCreditsState {
  switch (action.type) {
    case ActionTypes.FETCH_MOVIE_CREDITS_START:
      return {
        ...state,
        fetchStatus: FetchStatus.PENDING,
      };
    case ActionTypes.FETCH_MOVIE_CREDITS_SUCCESS:
      return {
        ...state,
        movieCredits: action.payload,
        fetchStatus: FetchStatus.SUCCESS,
      };
    case ActionTypes.FETCH_MOVIE_CREDITS_FAILURE:
      return {
        ...state,
        fetchStatus: FetchStatus.FAILURE,
      };
    case ActionTypes.CLEAR_MOVIE_CREDITS:
      return {
        ...state,
        movieCredits: null,
        fetchStatus: null,
      };
    default:
      return state;
  }
}

export default reducer;
