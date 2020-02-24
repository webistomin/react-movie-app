import { all, takeLatest, put } from 'redux-saga/effects';

import searchSaga from 'store/search/saga';
import movieSaga from 'store/movie/saga';
import genresSaga from 'store/genres/saga';

import { ActionTypes } from 'store/types';

function* initAppSaga() {
  yield put({ type: '[genres] fetch movie genres start' });
}

export default function* rootSaga() {
  yield all([initAppSaga(), searchSaga(), movieSaga(), genresSaga()]);
}
