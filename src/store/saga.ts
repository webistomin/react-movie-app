import { all } from 'redux-saga/effects';

import searchSaga from 'store/search/saga';
import latestMovieSaga from 'store/movie/latest/saga';
import popularMoviesSaga from 'store/movie/popular/saga';
import recommendedMoviesSaga from 'store/movie/recommended/saga';
import similarMoviesSaga from 'store/movie/similar/saga';
import nowPlayingMoviesSaga from 'store/movie/now-playing/saga';
import movieDetailsSaga from 'store/movie/details/saga';
import genresSaga from 'store/genres/saga';
import initializeAppSaga from 'store/init/saga';

export default function* rootSaga() {
  yield all([
    searchSaga(),
    latestMovieSaga(),
    popularMoviesSaga(),
    genresSaga(),
    movieDetailsSaga(),
    recommendedMoviesSaga(),
    nowPlayingMoviesSaga(),
    similarMoviesSaga(),
    initializeAppSaga(),
  ]);
}
