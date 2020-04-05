import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, IFetchMovieCreditsStartAction } from 'store/movie/credits/types';
import TMDbService from '~/services/tmdbService';
import { fetchMovieCreditsFailure, fetchMovieCreditsSuccess } from 'store/movie/credits/actions';

const API = new TMDbService();

function* fetchMovieDetailsSaga(action: IFetchMovieCreditsStartAction) {
  try {
    const movieCredits = yield call(API.getMovieCredits, action.payload);
    yield put(fetchMovieCreditsSuccess(movieCredits));
  } catch (error) {
    yield put(fetchMovieCreditsFailure());
  }
}

export default function*() {
  yield all([takeLatest(ActionTypes.FETCH_MOVIE_CREDITS_START, fetchMovieDetailsSaga)]);
}
