import { ActionTypes } from 'store/movie/now-playing/types';
import { IMovie } from 'common/types/movie';
import { ISearch } from 'common/types/search';

export function fetchNowPlayingMoviesStart() {
  return {
    type: ActionTypes.FETCH_NOW_PLAYING_MOVIES_START,
  };
}

export function fetchNowPlayingMoviesSuccess(payload: ISearch<IMovie>) {
  return {
    type: ActionTypes.FETCH_NOW_PLAYING_MOVIES_SUCCESS,
    payload,
  };
}

export function fetchNowPlayingMoviesFailure() {
  return {
    type: ActionTypes.FETCH_NOW_PLAYING_MOVIES_FAILURE,
  };
}
