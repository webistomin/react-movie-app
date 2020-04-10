import { all, call, debounce, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, IFetchUpcomingMoviesStartAction, ISetUpcomingSearchPage } from 'store/movie/upcoming/types';
import TMDbService from '~/services/tmdbService';
import { fetchUpcomingMoviesFailure, fetchUpcomingMoviesSuccess } from 'store/movie/upcoming/actions';
import Notifications from 'react-notification-system-redux';

const API = new TMDbService();

function* saveUpcomingMovies(page = 1, shouldConcat = false) {
  try {
    const upcomingMovies = yield call(API.getUpcomingMovies, page);
    yield put(
      fetchUpcomingMoviesSuccess({
        movies: upcomingMovies,
        shouldConcat,
      })
    );
  } catch (error) {
    yield put(fetchUpcomingMoviesFailure());
    yield put(
      Notifications.error({
        title: 'Upcoming movies',
        message: 'Error during request, please reload page',
        autoDismiss: 3,
      })
    );
  }
}

function* fetchUpcomingMoviesSaga(action: IFetchUpcomingMoviesStartAction) {
  yield saveUpcomingMovies(1, false);
}

function* fetchUpcomingMoviesWithPageSaga(action: ISetUpcomingSearchPage) {
  const page = action.payload;

  yield saveUpcomingMovies(page, true);
}

export default function*() {
  yield all([
    debounce(150, ActionTypes.SET_UPCOMING_SEARCH_PAGE, fetchUpcomingMoviesWithPageSaga),
    takeLatest(ActionTypes.FETCH_UPCOMING_MOVIES_START, fetchUpcomingMoviesSaga),
  ]);
}
