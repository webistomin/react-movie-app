import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, IFetchLatestMovieStartAction } from 'store/movie/types';
import TMDbService from '~/services/TMDbService';
import { fetchLatestMovieSuccess } from 'store/movie/actions';
import { FetchStatus } from 'store/types';

const API = new TMDbService();

function* fetchLatestMovieSaga(action: IFetchLatestMovieStartAction) {
  try {
    const latestMovie = yield call(API.getLatestMovie);
    yield put(
      fetchLatestMovieSuccess({
        latestMovie,
        fetchStatus: FetchStatus.SUCCESS,
      })
    );
  } catch (error) {}
}

export default function*() {
  yield all([takeLatest(ActionTypes.FETCH_LATEST_MOVIE_START, fetchLatestMovieSaga)]);
}
