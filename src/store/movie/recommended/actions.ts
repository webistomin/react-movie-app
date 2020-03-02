import { ActionTypes } from 'store/movie/recommended/types';
import { ISearch } from 'common/types/search';
import { IMovie } from 'common/types/movie';

export function fetchRecommendedMoviesStart(payload: number) {
  return {
    type: ActionTypes.FETCH_RECOMMENDED_MOVIES_START,
    payload,
  };
}

export function fetchRecommendedMoviesSuccess(payload: ISearch<IMovie>) {
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
