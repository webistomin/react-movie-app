import { all, takeLatest, call, put } from 'redux-saga/effects';
import { ActionTypes, ISearchQueryAction } from 'store/search/types';
import TMDbService from '~/services/tmdbService';
import { fetchSearchContentFailure, fetchSearchContentStart, fetchSearchContentSuccess } from 'store/search/actions';

const API = new TMDbService();

function* searchQuerySaga(action: ISearchQueryAction) {
  const query = action.payload;

  if (query) {
    yield put(fetchSearchContentStart());
    try {
      const searchResult = yield call(API.getContentBySearchQuery, query, 1);
      yield put(fetchSearchContentSuccess(searchResult));
    } catch (error) {
      yield put(fetchSearchContentFailure());
    }
  }
}

export default function*() {
  yield all([takeLatest(ActionTypes.SET_SEARCH_QUERY, searchQuerySaga)]);
}
