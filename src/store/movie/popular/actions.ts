import { ActionTypes, IMovieInterface } from 'store/movie/popular/types';

export function fetchPopularMoviesStart() {
  return {
    type: ActionTypes.FETCH_POPULAR_MOVIES_START,
  };
}

export function fetchPopularMoviesSuccess(payload: IMovieInterface) {
  return {
    type: ActionTypes.FETCH_POPULAR_MOVIES_SUCCESS,
    payload,
  };
}

export function fetchPopularMoviesFailure() {
  return {
    type: ActionTypes.FETCH_POPULAR_MOVIES_FAILURE,
  };
}
