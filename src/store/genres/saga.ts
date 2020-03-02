import { all, call, put, takeEvery } from 'redux-saga/effects';
import { ActionTypes, IFetchMovieGenresStartAction } from 'store/genres/types';
import TMDbService from '~/services/TMDbService';
import { fetchMovieGenresFailure, fetchMovieGenresSuccess } from 'store/genres/actions';

const API = new TMDbService();

function* fetchMovieGenresSaga(action: IFetchMovieGenresStartAction) {
  try {
    const genres = yield call(API.getGenres);
    yield put(fetchMovieGenresSuccess(genres));
  } catch (error) {
    yield put(fetchMovieGenresFailure());
  }
}

export default function*() {
  yield all([takeEvery(ActionTypes.FETCH_MOVIE_GENRES_START, fetchMovieGenresSaga)]);
}
