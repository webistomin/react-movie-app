import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, IFetchRecommendedMoviesStartAction } from 'store/movie/recommended/types';
import TMDbService from '~/services/TMDbService';
import { fetchRecommendedMoviesFailure, fetchRecommendedMoviesSuccess } from 'store/movie/recommended/actions';

const API = new TMDbService();

function* fetchPopularMoviesSaga(action: IFetchRecommendedMoviesStartAction) {
  try {
    const recommendedMovies = yield call(API.getMovieRecommendations, action.payload);
    yield put(
      fetchRecommendedMoviesSuccess({
        recommendedMovies,
      })
    );
  } catch (error) {
    yield put(fetchRecommendedMoviesFailure());
  }
}

export default function*() {
  yield all([takeLatest(ActionTypes.FETCH_RECOMMENDED_MOVIES_START, fetchPopularMoviesSaga)]);
}
