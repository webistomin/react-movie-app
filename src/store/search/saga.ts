import { all, call, put, debounce, select, takeLatest } from 'redux-saga/effects';
import { ActionTypes, ISearchPageAction, ISearchQueryAction } from 'store/search/types';
import { push } from 'connected-react-router';
import TMDbService from '~/services/tmdbService';
import { fetchSearchContentFailure, fetchSearchContentStart, fetchSearchContentSuccess } from 'store/search/actions';
import { getSearchQuery } from 'store/search/selectors';

const API = new TMDbService();

function* saveMovies(query: string, page = 1, shouldConcat = false) {
  if (query) {
    yield put(fetchSearchContentStart());
    try {
      const searchResult = yield call(API.getContentBySearchQuery, query, page);
      yield put(fetchSearchContentSuccess({ movies: searchResult, shouldConcat }));
      yield put(push('/search'));
    } catch (error) {
      yield put(fetchSearchContentFailure());
    }
  }
}

function* searchQuerySaga(action: ISearchQueryAction) {
  const query = action.payload;

  yield saveMovies(query, 1, false);
}

function* searchQueryWithPageSaga(action: ISearchPageAction) {
  const query = yield select(getSearchQuery);
  const page = action.payload;

  yield saveMovies(query, page, true);
}

export default function*() {
  yield all([
    debounce(300, ActionTypes.SET_SEARCH_QUERY, searchQuerySaga),
    takeLatest(ActionTypes.SET_SEARCH_PAGE, searchQueryWithPageSaga),
  ]);
}
