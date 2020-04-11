import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, IFetchPersonDetailsStartAction } from 'store/person/types';
import TMDbService from '~/services/tmdbService';
import { fetchPersonDetailsFailure, fetchPersonDetailsSuccess } from 'store/person/actions';
import Notifications from 'react-notification-system-redux';

const API = new TMDbService();

function* fetchMovieDetailsSaga(action: IFetchPersonDetailsStartAction) {
  try {
    const personDetails = yield call(API.getPersonDetails, action.payload);
    yield put(fetchPersonDetailsSuccess(personDetails));
  } catch (error) {
    yield put(fetchPersonDetailsFailure());
    yield put(
      Notifications.error({
        title: 'Person details',
        message: 'Error during request, please reload page',
        autoDismiss: 3,
      })
    );
  }
}

export default function*() {
  yield all([takeLatest(ActionTypes.FETCH_PERSON_DETAILS_START, fetchMovieDetailsSaga)]);
}
