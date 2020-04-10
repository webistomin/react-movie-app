import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, IFetchMovieDetailsStartAction } from 'store/movie/details/types';
import TMDbService from '~/services/tmdbService';
import { fetchMovieDetailsFailure, fetchMovieDetailsSuccess } from 'store/movie/details/actions';
import Notifications from 'react-notification-system-redux';

const API = new TMDbService();

function* fetchMovieDetailsSaga(action: IFetchMovieDetailsStartAction) {
  try {
    const movieDetails = yield call(API.getMovieDetails, action.payload);
    yield put(fetchMovieDetailsSuccess(movieDetails));
  } catch (error) {
    yield put(fetchMovieDetailsFailure());
    yield put(
      Notifications.error({
        title: 'Movie details',
        message: 'Error during request, please reload page',
        autoDismiss: 3,
      })
    );
  }
}

export default function*() {
  yield all([takeLatest(ActionTypes.FETCH_MOVIE_DETAILS_START, fetchMovieDetailsSaga)]);
}
