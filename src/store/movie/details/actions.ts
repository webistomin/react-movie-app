import { ActionTypes, IMovieInterface } from 'store/movie/details/types';

export function fetchMovieDetailsStart(payload: number) {
  return {
    type: ActionTypes.FETCH_MOVIE_DETAILS_START,
    payload,
  };
}

export function fetchMovieDetailsSuccess(payload: IMovieInterface) {
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
