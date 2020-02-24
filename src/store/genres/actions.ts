import { ActionTypes, IGenres } from 'store/genres/types';

export function fetchMovieGenres() {
  return {
    type: ActionTypes.FETCH_MOVIE_GENRES_START,
  };
}

export function setMovieGenres(payload: IGenres) {
  return {
    type: ActionTypes.FETCH_MOVIE_GENRES_SUCCESS,
    payload,
  };
}

export function failureMovieGenres() {
  return {
    type: ActionTypes.FETCH_MOVIE_GENRES_FAILURE,
  };
}
