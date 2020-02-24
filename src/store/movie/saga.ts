import { all, takeLatest, call } from 'redux-saga/effects';
import { ActionTypes, IFetchLatestMovieStartAction } from 'store/movie/types';
import TMDbService from '~/services/TMDbService';

const API = new TMDbService();

function* fetchLatestMovieSaga(action: IFetchLatestMovieStartAction) {
  try {
    const data = yield call(API.getLatestMovie);
    console.log(data);
  } catch (error) {}
}

export default function*() {
  yield all([takeLatest(ActionTypes.FETCH_LATEST_MOVIE_START, fetchLatestMovieSaga)]);
}
