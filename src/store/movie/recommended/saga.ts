import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, IFetchRecommendedMoviesStartAction } from 'store/movie/recommended/types';
import TMDbService from '~/services/tmdbService';
import { fetchRecommendedMoviesFailure, fetchRecommendedMoviesSuccess } from 'store/movie/recommended/actions';
import Notifications from 'react-notification-system-redux';

const API = new TMDbService();

function* fetchRecommendedMoviesSaga(action: IFetchRecommendedMoviesStartAction) {
  try {
    const recommendedMovie = yield call(API.getMovieRecommendations, action.payload);
    yield put(fetchRecommendedMoviesSuccess(recommendedMovie));
  } catch (error) {
    yield put(fetchRecommendedMoviesFailure());
    yield put(
      Notifications.error({
        title: 'Recommended movies',
        message: 'Error during request, please reload page',
        autoDismiss: 3,
      })
    );
  }
}

export default function*() {
  yield all([takeLatest(ActionTypes.FETCH_RECOMMENDED_MOVIES_START, fetchRecommendedMoviesSaga)]);
}
