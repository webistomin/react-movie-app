import { ActionTypes } from 'store/movie/types';

export function fetchLatestMovieStart() {
  return {
    type: ActionTypes.FETCH_LATEST_MOVIE_START,
  };
}
