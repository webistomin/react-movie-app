import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, IFetchTopRatedMoviesStartAction } from 'store/movie/top-rated/types';
import TMDbService from '~/services/tmdbService';
import { fetchTopRatedMoviesSuccess, fetchTopRatedMoviesFailure } from 'store/movie/top-rated/actions';

const API = new TMDbService();

function* fetchTopRatedMoviesSaga(action: IFetchTopRatedMoviesStartAction) {
  try {
    const topRatedMovies = yield call(API.getTopRatedMovies);
    yield put(fetchTopRatedMoviesSuccess(topRatedMovies));
  } catch (error) {
    yield put(fetchTopRatedMoviesFailure());
  }
}

export default function*() {
  yield all([takeLatest(ActionTypes.FETCH_TOP_RATED_MOVIES_START, fetchTopRatedMoviesSaga)]);
}
