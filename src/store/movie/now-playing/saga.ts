import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, IFetchNowPlayingMoviesStartAction } from 'store/movie/now-playing/types';
import TMDbService from '~/services/tmdbService';
import { fetchNowPlayingMoviesFailure, fetchNowPlayingMoviesSuccess } from 'store/movie/now-playing/actions';

const API = new TMDbService();

function* fetchNowPlayingMoviesSaga(action: IFetchNowPlayingMoviesStartAction) {
  try {
    const nowPlayingMovies = yield call(API.getNowPlayingMovies);
    yield put(fetchNowPlayingMoviesSuccess(nowPlayingMovies));
  } catch (error) {
    yield put(fetchNowPlayingMoviesFailure());
  }
}

export default function*() {
  yield all([takeLatest(ActionTypes.FETCH_NOW_PLAYING_MOVIES_START, fetchNowPlayingMoviesSaga)]);
}
