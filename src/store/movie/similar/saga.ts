import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, IFetchSimilarMoviesStartAction } from 'store/movie/similar/types';
import TMDbService from '~/services/TMDbService';
import { fetchSimilarMoviesFailure, fetchSimilarMoviesSuccess } from 'store/movie/similar/actions';

const API = new TMDbService();

function* fetchSimilarMoviesSaga(action: IFetchSimilarMoviesStartAction) {
  try {
    const similarMovie = yield call(API.getMovieSimilar, action.payload);
    yield put(fetchSimilarMoviesSuccess(similarMovie));
  } catch (error) {
    yield put(fetchSimilarMoviesFailure());
  }
}

export default function*() {
  yield all([takeLatest(ActionTypes.FETCH_SIMILAR_MOVIES_START, fetchSimilarMoviesSaga)]);
}
