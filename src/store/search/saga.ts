import { all, takeLatest, call, put } from 'redux-saga/effects';
import { ActionTypes, ISearchQueryAction } from 'store/search/types';
import TMDbService from '~/services/TMDbService';

const API = new TMDbService();

function* searchQuerySaga(action: ISearchQueryAction) {
  const query = action.payload;

  if (query) {
    try {
      const data = yield call(API.getContentBySearchQuery, query, 1);
      console.log(data);
    } catch (error) {}
  }
}

export default function*() {
  yield all([takeLatest(ActionTypes.SET_SEARCH_QUERY, searchQuerySaga)]);
}
