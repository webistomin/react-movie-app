import { all, call, put, debounce, select, takeLatest } from 'redux-saga/effects';
import { ActionTypes, ISearchPageAction, ISearchQueryAction } from 'store/search/types';
import { push } from 'connected-react-router';
import TMDbService from '~/services/tmdbService';
import {
  clearSearchPage,
  fetchSearchContentFailure,
  fetchSearchContentStart,
  fetchSearchContentSuccess,
} from 'store/search/actions';
import { getSearchPage, getSearchQuery } from 'store/search/selectors';
import { getCurrentLocation } from 'store/router/selectors';
import Notifications from 'react-notification-system-redux';

const API = new TMDbService();

function* saveMovies(query: string, page = 1, shouldConcat = false) {
  const location = yield select(getCurrentLocation);
  const currentPage = yield select(getSearchPage);

  if (query) {
    yield put(fetchSearchContentStart());
    yield put(push(`/search?query=${query}`));
    try {
      const searchResult = yield call(API.getContentBySearchQuery, query, page);
      yield put(fetchSearchContentSuccess({ movies: searchResult, shouldConcat }));

      if (currentPage !== 1 && !shouldConcat) {
        yield put(clearSearchPage());
      }

      if (location.pathname !== '/search') {
        yield put(push('/search'));
      }
    } catch (error) {
      yield put(fetchSearchContentFailure());
      yield put(
        Notifications.error({
          title: 'Movie search',
          message: 'Error during request, please reload page',
          autoDismiss: 3,
        })
      );
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
