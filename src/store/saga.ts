import { all } from 'redux-saga/effects';

import searchSaga from 'store/search/saga';
import movieSaga from 'store/movie/saga';
import genresSaga from 'store/genres/saga';

export default function* rootSaga() {
  yield all([searchSaga(), movieSaga(), genresSaga()]);
}
