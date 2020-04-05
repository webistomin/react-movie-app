import { ActionTypes, IFetchMovieImagesActions, IMovieImagesState } from 'store/movie/images/types';
import { FetchStatus } from 'common/types/fetch-status';

const initialState: IMovieImagesState = {
  movieImages: null,
  fetchStatus: null,
};

function reducer(state: IMovieImagesState = initialState, action: IFetchMovieImagesActions): IMovieImagesState {
  switch (action.type) {
    case ActionTypes.FETCH_MOVIE_IMAGES_START:
      return {
        ...state,
        fetchStatus: FetchStatus.PENDING,
      };
    case ActionTypes.FETCH_MOVIE_IMAGES_SUCCESS:
      return {
        ...state,
        movieImages: action.payload,
        fetchStatus: FetchStatus.SUCCESS,
      };
    case ActionTypes.FETCH_MOVIE_IMAGES_FAILURE:
      return {
        ...state,
        fetchStatus: FetchStatus.FAILURE,
      };
    case ActionTypes.CLEAR_MOVIE_IMAGES:
      return {
        ...state,
        movieImages: null,
        fetchStatus: null,
      };
    default:
      return state;
  }
}

export default reducer;
