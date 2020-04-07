import { ActionTypes } from 'store/movie/popular/types';
import { ISearch } from 'common/types/search';
import { IMovie } from 'common/types/movie';

export function fetchPopularMoviesStart() {
  return {
    type: ActionTypes.FETCH_POPULAR_MOVIES_START,
  };
}

export function fetchPopularMoviesSuccess(payload: { movies: ISearch<IMovie>; shouldConcat?: boolean }) {
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

export function clearPopularSearchPage() {
  return {
    type: ActionTypes.CLEAR_POPULAR_SEARCH_PAGE,
  };
}

export function setPopularSearchPage(payload: number) {
  return {
    type: ActionTypes.SET_POPULAR_SEARCH_PAGE,
    payload,
  };
}
