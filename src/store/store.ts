import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { StateType } from 'typesafe-actions';
import { createBrowserHistory } from 'history';
import { reducer as notifications } from 'react-notification-system-redux';

import { sagaMiddleware, connectedRouterMiddleware } from 'store/middlewares';
import rootSaga from 'store/saga';
import { IS_DEV } from 'utils/env';

import searchReducer from 'store/search/reducer';
import latestMovieReducer from 'store/movie/latest/reducer';
import popularMoviesReducer from 'store/movie/popular/reducer';
import movieDetailsReducer from 'store/movie/details/reducer';
import movieCreditsReducer from 'store/movie/credits/reducer';
import recommendedMoviesReducer from 'store/movie/recommended/reducer';
import similarMoviesReducer from 'store/movie/similar/reducer';
import nowPlayingMoviesReducer from 'store/movie/now-playing/reducer';
import topRatedMoviesReducer from 'store/movie/top-rated/reducer';
import upcomingMoviesReducer from 'store/movie/upcoming/reducer';
import movieVideosReducer from 'store/movie/videos/reducer';
import movieImagesReducer from 'store/movie/images/reducer';
import genresReducer from 'store/genres/reducer';
import favoriteMoviesReducer from 'store/favorites/reducer';
import personDetailsReducer from 'store/person/reducer';

const movieReducers = combineReducers({
  latestMovies: latestMovieReducer,
  popularMovies: popularMoviesReducer,
  movieDetails: movieDetailsReducer,
  movieCredits: movieCreditsReducer,
  movieVideos: movieVideosReducer,
  movieImages: movieImagesReducer,
  recommendedMovies: recommendedMoviesReducer,
  similarMovies: similarMoviesReducer,
  nowPlayingMovies: nowPlayingMoviesReducer,
  topRatedMovies: topRatedMoviesReducer,
  upcomingMovies: upcomingMoviesReducer,
});

export const history = createBrowserHistory();

const rootReducers = combineReducers({
  router: connectRouter(history),
  search: searchReducer,
  movies: movieReducers,
  genres: genresReducer,
  favoriteMovies: favoriteMoviesReducer,
  person: personDetailsReducer,
  notifications: notifications,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favoriteMovies'],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const middlewares = [sagaMiddleware, connectedRouterMiddleware(history)];

export function configureStore(initialState = {}) {
  const enhancer = (IS_DEV ? composeWithDevTools : compose) as typeof compose;
  const composeMiddlewares = enhancer(applyMiddleware(...middlewares));
  const store = createStore(persistedReducer, initialState, composeMiddlewares);

  sagaMiddleware.run(rootSaga);

  const persistor = persistStore(store);

  return { store, persistor };
}

export type ApplicationState = StateType<typeof rootReducers>;
