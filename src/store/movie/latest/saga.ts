import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, IFetchLatestMovieStartAction } from 'store/movie/latest/types';
import TMDbService from '~/services/tmdbService';
import { fetchLatestMovieFailure, fetchLatestMovieSuccess } from 'store/movie/latest/actions';

const API = new TMDbService();

function* fetchLatestMovieSaga(action: IFetchLatestMovieStartAction) {
  try {
    const latestMovie = yield call(API.getLatestMovie);
    yield put(fetchLatestMovieSuccess(latestMovie));
  } catch (error) {
    yield put(fetchLatestMovieFailure());
  }
}

export default function*() {
  yield all([takeLatest(ActionTypes.FETCH_LATEST_MOVIE_START, fetchLatestMovieSaga)]);
}
