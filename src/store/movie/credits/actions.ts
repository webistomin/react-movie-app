import { ActionTypes } from 'store/movie/credits/types';
import { IMovieCredits } from 'common/types/movie-credits';

export function fetchMovieCreditsStart(payload: number) {
  return {
    type: ActionTypes.FETCH_MOVIE_CREDITS_START,
    payload,
  };
}

export function fetchMovieCreditsSuccess(payload: IMovieCredits) {
  return {
    type: ActionTypes.FETCH_MOVIE_CREDITS_SUCCESS,
    payload,
  };
}

export function fetchMovieCreditsFailure() {
  return {
    type: ActionTypes.FETCH_MOVIE_CREDITS_FAILURE,
  };
}

export function clearMovieCredits() {
  return {
    type: ActionTypes.CLEAR_MOVIE_CREDITS,
  };
}
