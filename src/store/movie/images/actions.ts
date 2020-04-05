import { ActionTypes } from 'store/movie/images/types';
import { IImages } from 'common/types/images';

export function fetchMovieImagesStart(payload: number) {
  return {
    type: ActionTypes.FETCH_MOVIE_IMAGES_START,
    payload,
  };
}

export function fetchMovieImagesSuccess(payload: IImages) {
  return {
    type: ActionTypes.FETCH_MOVIE_IMAGES_SUCCESS,
    payload,
  };
}

export function fetchMovieImagesFailure() {
  return {
    type: ActionTypes.FETCH_MOVIE_IMAGES_FAILURE,
  };
}

export function clearMovieImages() {
  return {
    type: ActionTypes.CLEAR_MOVIE_IMAGES,
  };
}
