import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { StateType } from 'typesafe-actions';

import { sagaMiddleware } from 'store/middlewares';
import rootSaga from 'store/saga';
import { IS_DEV } from 'utils/env';

import searchReducer from 'store/search/reducer';
import latestMovieReducer from 'store/movie/latest/reducer';
import popularMoviesReducer from 'store/movie/popular/reducer';
import genresReducer from 'store/genres/reducer';

const movieReducers = combineReducers({
  latestMovies: latestMovieReducer,
  popularMovies: popularMoviesReducer,
});

const rootReducers = combineReducers({
  search: searchReducer,
  movies: movieReducers,
  genres: genresReducer,
});

export function configureStore(initialState = {}) {
  const enhancer = (IS_DEV ? composeWithDevTools : compose) as typeof compose;
  const composeMiddlewares = enhancer(applyMiddleware(sagaMiddleware));
  const store = createStore(rootReducers, initialState, composeMiddlewares);

  sagaMiddleware.run(rootSaga);

  return store;
}

export type ApplicationState = StateType<typeof rootReducers>;
