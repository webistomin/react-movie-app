import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, IFetchPopularMoviesStartAction } from 'store/movie/popular/types';
import TMDbService from '~/services/TMDbService';
import { fetchPopularMoviesFailure, fetchPopularMoviesSuccess } from 'store/movie/popular/actions';

const API = new TMDbService();

function* fetchPopularMoviesSaga(action: IFetchPopularMoviesStartAction) {
  try {
    const popularMovie = yield call(API.getPopularMovies);
    yield put(fetchPopularMoviesSuccess(popularMovie));
  } catch (error) {
    yield put(fetchPopularMoviesFailure());
  }
}

export default function*() {
  yield all([takeLatest(ActionTypes.FETCH_POPULAR_MOVIES_START, fetchPopularMoviesSaga)]);
}
