import React, { FunctionComponent, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import { Provider } from 'react-redux';
import { configureStore } from 'store/store';
import '@/assets/sass/main.sass';

import AppNav from 'components/partials/AppNav';
import AppSearch from 'components/partials/AppSearch';
import AppTransitionWrapper from 'components/partials/AppTransitionWrapper';
import ErrorBoundary from 'components/partials/AppErrorBoundary';
import AppInitializer from 'components/partials/AppInitializer';

const Home = lazy(() => import('pages/Home'));
const Movie = lazy(() => import('pages/Movie'));
const Error404 = lazy(() => import('pages/Error404'));
const PopularMovies = lazy(() => import('pages/PopularMovies'));

const b = cn('App');
const w = cn('Wrapper');

const store = configureStore();

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary className={b()}>
        <AppInitializer />
        <Router>
          <AppTransitionWrapper>
            <div className={w()}>
              <AppNav />
              <AppSearch />
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route path='/' exact render={() => <Home />} />
                  <Route path='/movie' exact render={() => <Movie />} />
                  <Route path='/popular' exact render={() => <PopularMovies />} />
                  <Route component={Error404} />
                </Switch>
              </Suspense>
            </div>
          </AppTransitionWrapper>
        </Router>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
