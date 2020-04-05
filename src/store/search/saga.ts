import { all, call, put, debounce, select, takeLatest } from 'redux-saga/effects';
import { ActionTypes, ISearchPageAction, ISearchQueryAction } from 'store/search/types';
import { push } from 'connected-react-router';
import TMDbService from '~/services/tmdbService';
import { fetchSearchContentFailure, fetchSearchContentStart, fetchSearchContentSuccess } from 'store/search/actions';
import { getSearchQuery } from 'store/search/selectors';

const API = new TMDbService();

function* searchQuerySaga(action: ISearchQueryAction) {
  const query = action.payload;

  if (query) {
    yield put(fetchSearchContentStart());
    try {
      const searchResult = yield call(API.getContentBySearchQuery, query, 1);
      const shouldConcat = false;
      yield put(fetchSearchContentSuccess({ movies: searchResult, shouldConcat }));
      yield put(push('/search'));
    } catch (error) {
      yield put(fetchSearchContentFailure());
    }
  }
}

function* searchQueryWithPageSaga(action: ISearchPageAction) {
  const query = yield select(getSearchQuery);
  const page = action.payload;

  if (query) {
    yield put(fetchSearchContentStart());
    try {
      const searchResult = yield call(API.getContentBySearchQuery, query, page);
      const shouldConcat = true;
      yield put(fetchSearchContentSuccess({ movies: searchResult, shouldConcat }));
      yield put(push('/search'));
    } catch (error) {
      yield put(fetchSearchContentFailure());
    }
  }
}

export default function*() {
  yield all([
    debounce(300, ActionTypes.SET_SEARCH_QUERY, searchQuerySaga),
    takeLatest(ActionTypes.SET_SEARCH_PAGE, searchQueryWithPageSaga),
  ]);
}
