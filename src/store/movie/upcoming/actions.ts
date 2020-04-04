import { ActionTypes } from 'store/movie/upcoming/types';
import { IMovie } from 'common/types/movie';
import { ISearch } from 'common/types/search';

export function fetchUpcomingMoviesStart() {
  return {
    type: ActionTypes.FETCH_UPCOMING_MOVIES_START,
  };
}

export function fetchUpcomingMoviesSuccess(payload: ISearch<IMovie>) {
  return {
    type: ActionTypes.FETCH_UPCOMING_MOVIES_SUCCESS,
    payload,
  };
}

export function fetchUpcomingMoviesFailure() {
  return {
    type: ActionTypes.FETCH_UPCOMING_MOVIES_FAILURE,
  };
}
