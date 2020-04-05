import { ActionTypes } from 'store/movie/videos/types';
import { IVideos } from 'common/types/videos';

export function fetchMovieVideosStart(payload: number) {
  return {
    type: ActionTypes.FETCH_MOVIE_VIDEOS_START,
    payload,
  };
}

export function fetchMovieVideosSuccess(payload: IVideos) {
  return {
    type: ActionTypes.FETCH_MOVIE_VIDEOS_SUCCESS,
    payload,
  };
}

export function fetchMovieVideosFailure() {
  return {
    type: ActionTypes.FETCH_MOVIE_VIDEOS_FAILURE,
  };
}

export function clearMovieVideos() {
  return {
    type: ActionTypes.CLEAR_MOVIE_VIDEOS,
  };
}
