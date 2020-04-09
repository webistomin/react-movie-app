import { ActionTypes } from 'store/movie/upcoming/types';
import { IMovie } from 'common/types/movie';
import { ISearch } from 'common/types/search';

export function fetchUpcomingMoviesStart() {
  return {
    type: ActionTypes.FETCH_UPCOMING_MOVIES_START,
  };
}

export function fetchUpcomingMoviesSuccess(payload: { movies: ISearch<IMovie>; shouldConcat?: boolean }) {
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

export function clearUpcomingSearchPage() {
  return {
    type: ActionTypes.CLEAR_UPCOMING_SEARCH_PAGE,
  };
}

export function setUpcomingSearchPage(payload: number) {
  return {
    type: ActionTypes.SET_UPCOMING_SEARCH_PAGE,
    payload,
  };
}
