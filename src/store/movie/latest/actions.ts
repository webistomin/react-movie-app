import { ActionTypes } from 'store/movie/latest/types';
import { IMovie } from 'common/types/movie';

export function fetchLatestMovieStart() {
  return {
    type: ActionTypes.FETCH_LATEST_MOVIE_START,
  };
}

export function fetchLatestMovieSuccess(payload: IMovie) {
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
