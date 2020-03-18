import { ActionTypes } from 'store/movie/details/types';
import { IMovie } from 'common/types/movie';

export function fetchMovieDetailsStart(payload: number) {
  return {
    type: ActionTypes.FETCH_MOVIE_DETAILS_START,
    payload,
  };
}

export function fetchMovieDetailsSuccess(payload: IMovie) {
  return {
    type: ActionTypes.FETCH_MOVIE_DETAILS_SUCCESS,
    payload,
  };
}

export function fetchMovieDetailsFailure() {
  return {
    type: ActionTypes.FETCH_MOVIE_DETAILS_FAILURE,
  };
}

export function clearMovieDetails() {
  return {
    type: ActionTypes.CLEAR_MOVIE_DETAILS,
  };
}
