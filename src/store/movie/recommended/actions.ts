import { ActionTypes, IMovieInterface } from 'store/movie/recommended/types';

export function fetchRecommendedMoviesStart(payload: number) {
  return {
    type: ActionTypes.FETCH_RECOMMENDED_MOVIES_START,
    payload,
  };
}

export function fetchRecommendedMoviesSuccess(payload: IMovieInterface) {
  return {
    type: ActionTypes.FETCH_RECOMMENDED_MOVIES_SUCCESS,
    payload,
  };
}

export function fetchRecommendedMoviesFailure() {
  return {
    type: ActionTypes.FETCH_RECOMMENDED_MOVIES_FAILURE,
  };
}
