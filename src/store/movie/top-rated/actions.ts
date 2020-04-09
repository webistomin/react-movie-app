import { ActionTypes } from 'store/movie/top-rated/types';
import { IMovie } from 'common/types/movie';
import { ISearch } from 'common/types/search';

export function fetchTopRatedMoviesStart() {
  return {
    type: ActionTypes.FETCH_TOP_RATED_MOVIES_START,
  };
}

export function fetchTopRatedMoviesSuccess(payload: { movies: ISearch<IMovie>; shouldConcat?: boolean }) {
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

export function clearTopRatedSearchPage() {
  return {
    type: ActionTypes.CLEAR_TOP_RATED_SEARCH_PAGE,
  };
}

export function setTopRatedSearchPage(payload: number) {
  return {
    type: ActionTypes.SET_TOP_RATED_SEARCH_PAGE,
    payload,
  };
}
