import { ActionTypes, IGenresState } from 'store/genres/types';

export function fetchMovieGenresStart() {
  return {
    type: ActionTypes.FETCH_MOVIE_GENRES_START,
  };
}

export function fetchMovieGenresSuccess(payload: IGenresState) {
  return {
    type: ActionTypes.FETCH_MOVIE_GENRES_SUCCESS,
    payload,
  };
}

export function fetchMovieGenresFailure() {
  return {
    type: ActionTypes.FETCH_MOVIE_GENRES_FAILURE,
  };
}
