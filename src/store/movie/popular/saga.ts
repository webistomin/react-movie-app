import { all, call, debounce, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, IFetchPopularMoviesStartAction, ISetPopularSearchPage } from 'store/movie/popular/types';
import TMDbService from '~/services/tmdbService';
import { fetchPopularMoviesFailure, fetchPopularMoviesSuccess } from 'store/movie/popular/actions';
import Notifications from 'react-notification-system-redux';

const API = new TMDbService();

function* savePopularMovies(page = 1, shouldConcat = false) {
  try {
    const popularMovies = yield call(API.getPopularMovies, page);
    yield put(
      fetchPopularMoviesSuccess({
        movies: popularMovies,
        shouldConcat,
      })
    );
  } catch (error) {
    console.log(error);
    yield put(fetchPopularMoviesFailure());
    yield put(
      Notifications.error({
        title: 'Popular movies',
        message: 'Error during request, please reload page',
        autoDismiss: 3,
      })
    );
  }
}

function* fetchPopularMoviesSaga(action: IFetchPopularMoviesStartAction) {
  yield savePopularMovies(1, false);
}

function* fetchPopularMoviesWithPageSaga(action: ISetPopularSearchPage) {
  const page = action.payload;

  yield savePopularMovies(page, true);
}

export default function*() {
  yield all([
    debounce(150, ActionTypes.SET_POPULAR_SEARCH_PAGE, fetchPopularMoviesWithPageSaga),
    takeLatest(ActionTypes.FETCH_POPULAR_MOVIES_START, fetchPopularMoviesSaga),
  ]);
}
