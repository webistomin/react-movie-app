import { ActionTypes } from 'store/movie/top-rated/types';
import { IMovie } from 'common/types/movie';
import { ISearch } from 'common/types/search';

export function fetchTopRatedMoviesStart() {
  return {
    type: ActionTypes.FETCH_TOP_RATED_MOVIES_START,
  };
}

export function fetchTopRatedMoviesSuccess(payload: ISearch<IMovie>) {
  return {
    type: ActionTypes.FETCH_TOP_RATED_MOVIES_SUCCESS,
    payload,
  };
}

export function fetchTopRatedMoviesFailure() {
  return {
    type: ActionTypes.FETCH_TOP_RATED_MOVIES_FAILURE,
  };
}
