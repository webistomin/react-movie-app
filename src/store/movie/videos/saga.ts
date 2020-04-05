import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, IFetchMovieVideosStartAction } from 'store/movie/videos/types';
import TMDbService from '~/services/tmdbService';
import { fetchMovieVideosFailure, fetchMovieVideosSuccess } from 'store/movie/videos/actions';

const API = new TMDbService();

function* fetchMovieVideosSaga(action: IFetchMovieVideosStartAction) {
  try {
    const movieVideos = yield call(API.getMovieVideos, action.payload);
    yield put(fetchMovieVideosSuccess(movieVideos));
  } catch (error) {
    yield put(fetchMovieVideosFailure());
  }
}

export default function*() {
  yield all([takeLatest(ActionTypes.FETCH_MOVIE_VIDEOS_START, fetchMovieVideosSaga)]);
}
