import { all, put, takeEvery } from 'redux-saga/effects';
import { fetchMovieGenresFailure, fetchMovieGenresStart } from 'store/genres/actions';
import { ActionTypes, InitializeApplicationAction } from './types';

function* initializeAppSaga(action: InitializeApplicationAction) {
  try {
    yield put(fetchMovieGenresStart());
  } catch (error) {
    yield put(fetchMovieGenresFailure());
  }
}

export default function*() {
  yield all([takeEvery(ActionTypes.APP_INITIALIZE, initializeAppSaga)]);
}
