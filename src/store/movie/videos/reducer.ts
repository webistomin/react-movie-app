import { ActionTypes, IFetchMovieVideosActions, IMovieVideosState } from 'store/movie/videos/types';
import { FetchStatus } from 'common/types/fetch-status';

const initialState: IMovieVideosState = {
  movieVideos: null,
  fetchStatus: null,
};

function reducer(state: IMovieVideosState = initialState, action: IFetchMovieVideosActions): IMovieVideosState {
  switch (action.type) {
    case ActionTypes.FETCH_MOVIE_VIDEOS_START:
      return {
        ...state,
        fetchStatus: FetchStatus.PENDING,
      };
    case ActionTypes.FETCH_MOVIE_VIDEOS_SUCCESS:
      return {
        ...state,
        movieVideos: action.payload,
        fetchStatus: FetchStatus.SUCCESS,
      };
    case ActionTypes.FETCH_MOVIE_VIDEOS_FAILURE:
      return {
        ...state,
        fetchStatus: FetchStatus.FAILURE,
      };
    case ActionTypes.CLEAR_MOVIE_VIDEOS:
      return {
        ...state,
        movieVideos: null,
        fetchStatus: null,
      };
    default:
      return state;
  }
}

export default reducer;
