import { all, call, debounce, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, IFetchTopRatedMoviesStartAction, ISetTopRatedSearchPage } from 'store/movie/top-rated/types';
import TMDbService from '~/services/tmdbService';
import { fetchTopRatedMoviesFailure, fetchTopRatedMoviesSuccess } from 'store/movie/top-rated/actions';

const API = new TMDbService();

function* saveTopRatedMovies(page = 1, shouldConcat = false) {
  try {
    const topRatedMovies = yield call(API.getTopRatedMovies, page);
    yield put(
      fetchTopRatedMoviesSuccess({
        movies: topRatedMovies,
        shouldConcat,
      })
    );
  } catch (error) {
    yield put(fetchTopRatedMoviesFailure());
  }
}

function* fetchTopRatedMoviesSaga(action: IFetchTopRatedMoviesStartAction) {
  yield saveTopRatedMovies(1, false);
}

function* fetchTopRatedMoviesWithPageSaga(action: ISetTopRatedSearchPage) {
  const page = action.payload;

  yield saveTopRatedMovies(page, true);
}

export default function*() {
  yield all([
    debounce(150, ActionTypes.SET_TOP_RATED_SEARCH_PAGE, fetchTopRatedMoviesWithPageSaga),
    takeLatest(ActionTypes.FETCH_TOP_RATED_MOVIES_START, fetchTopRatedMoviesSaga),
  ]);
}
