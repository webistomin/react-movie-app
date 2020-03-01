import { ActionTypes, IMovieInterface } from 'store/movie/similar/types';

export function fetchSimilarMoviesStart(payload: number) {
  return {
    type: ActionTypes.FETCH_SIMILAR_MOVIES_START,
    payload,
  };
}

export function fetchSimilarMoviesSuccess(payload: IMovieInterface) {
  return {
    type: ActionTypes.FETCH_SIMILAR_MOVIES_SUCCESS,
    payload,
  };
}

export function fetchSimilarMoviesFailure() {
  return {
    type: ActionTypes.FETCH_SIMILAR_MOVIES_FAILURE,
  };
}
