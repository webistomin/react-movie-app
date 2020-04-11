import { all } from 'redux-saga/effects';

import searchSaga from 'store/search/saga';
import latestMovieSaga from 'store/movie/latest/saga';
import popularMoviesSaga from 'store/movie/popular/saga';
import recommendedMoviesSaga from 'store/movie/recommended/saga';
import similarMoviesSaga from 'store/movie/similar/saga';
import nowPlayingMoviesSaga from 'store/movie/now-playing/saga';
import topRatedMoviesSaga from 'store/movie/top-rated/saga';
import upcomingMoviesSaga from 'store/movie/upcoming/saga';
import movieDetailsSaga from 'store/movie/details/saga';
import movieCreditsSaga from 'store/movie/credits/saga';
import movieVideosSaga from 'store/movie/videos/saga';
import movieImagesSaga from 'store/movie/images/saga';
import genresSaga from 'store/genres/saga';
import personDetailsSaga from 'store/person/saga';
import initializeAppSaga from 'store/init/saga';

export default function* rootSaga() {
  yield all([
    searchSaga(),
    latestMovieSaga(),
    popularMoviesSaga(),
    genresSaga(),
    movieDetailsSaga(),
    movieCreditsSaga(),
    recommendedMoviesSaga(),
    nowPlayingMoviesSaga(),
    upcomingMoviesSaga(),
    topRatedMoviesSaga(),
    similarMoviesSaga(),
    movieVideosSaga(),
    movieImagesSaga(),
    personDetailsSaga(),
    initializeAppSaga(),
  ]);
}
