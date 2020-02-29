import { all, call, put, takeEvery } from 'redux-saga/effects';
import { ActionTypes, IFetchMovieGenresStartAction } from 'store/genres/types';
import TMDbService from '~/services/TMDbService';
import { failureMovieGenres, fetchMovieGenres, setMovieGenres } from 'store/genres/actions';
import { FetchStatus } from 'store/types';

const API = new TMDbService();

function* fetchMovieGenresSaga(action: IFetchMovieGenresStartAction) {
  try {
    yield put(fetchMovieGenres());
    const genres = yield call(API.getGenres);
    yield put(
      setMovieGenres({
        genres,
        fetchStatus: FetchStatus.SUCCESS,
      })
    );
  } catch (error) {
    yield put(failureMovieGenres());
  }
}

export default function*() {
  yield all([takeEvery(ActionTypes.FETCH_MOVIE_GENRES_START, fetchMovieGenresSaga)]);
}
