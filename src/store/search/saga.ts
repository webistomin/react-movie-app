import { all, call, put, debounce } from 'redux-saga/effects';
import { ActionTypes, ISearchQueryAction } from 'store/search/types';
import { push } from 'connected-react-router';
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
      yield put(push('/search'));
    } catch (error) {
      yield put(fetchSearchContentFailure());
    }
  }
}

export default function*() {
  yield all([debounce(300, ActionTypes.SET_SEARCH_QUERY, searchQuerySaga)]);
}
