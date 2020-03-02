import { ActionTypes } from 'store/movie/popular/types';
import { ISearch } from 'common/types/search';
import { IMovie } from 'common/types/movie';

export function fetchPopularMoviesStart() {
  return {
    type: ActionTypes.FETCH_POPULAR_MOVIES_START,
  };
}

export function fetchPopularMoviesSuccess(payload: ISearch<IMovie>) {
  return {
    type: ActionTypes.FETCH_POPULAR_MOVIES_SUCCESS,
    payload,
  };
}

export function fetchPopularMoviesFailure() {
  return {
    type: ActionTypes.FETCH_POPULAR_MOVIES_FAILURE,
  };
}
