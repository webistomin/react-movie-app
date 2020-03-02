import { ActionTypes } from 'store/movie/similar/types';
import { ISearch } from 'common/types/search';
import { IMovie } from 'common/types/movie';

export function fetchSimilarMoviesStart(payload: number) {
  return {
    type: ActionTypes.FETCH_SIMILAR_MOVIES_START,
    payload,
  };
}

export function fetchSimilarMoviesSuccess(payload: ISearch<IMovie>) {
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
