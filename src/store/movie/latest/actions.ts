import { ActionTypes, IMovieInterface } from 'store/movie/latest/types';

export function fetchLatestMovieStart() {
  return {
    type: ActionTypes.FETCH_LATEST_MOVIE_START,
  };
}

export function fetchLatestMovieSuccess(payload: IMovieInterface) {
  return {
    type: ActionTypes.FETCH_LATEST_MOVIE_SUCCESS,
    payload,
  };
}

export function fetchLatestMovieFailure() {
  return {
    type: ActionTypes.FETCH_LATEST_MOVIE_FAILURE,
  };
}
