import { ActionTypes, IMovieInterface } from 'store/movie/types';

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
