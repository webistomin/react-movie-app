import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, IFetchUpcomingMoviesStartAction } from 'store/movie/upcoming/types';
import TMDbService from '~/services/tmdbService';
import { fetchUpcomingMoviesSuccess, fetchUpcomingMoviesFailure } from 'store/movie/upcoming/actions';

const API = new TMDbService();

function* fetchUpcomingMoviesSaga(action: IFetchUpcomingMoviesStartAction) {
  try {
    const upcomingMovies = yield call(API.getUpcomingMovies);
    yield put(fetchUpcomingMoviesSuccess(upcomingMovies));
  } catch (error) {
    yield put(fetchUpcomingMoviesFailure());
  }
}

export default function*() {
  yield all([takeLatest(ActionTypes.FETCH_UPCOMING_MOVIES_START, fetchUpcomingMoviesSaga)]);
}
