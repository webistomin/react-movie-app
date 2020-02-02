import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import todoApp from '@/store/reducers';
import '@/assets/sass/main.sass';
import AppNav from '@/components/partials/AppNav';
import AppSearch from '@/components/partials/AppSearch';
import AppTransitionWrapper from '@/components/partials/AppTransitionWrapper';
import ErrorBoundary from '@/components/partials/AppErrorBoundary';

// const store = createStore(movieApp);

const Home = lazy(() => import('@/pages/Home'));
const Movie = lazy(() => import('@/pages/Movie'));
const Error404 = lazy(() => import('@/pages/Error404'));

const App = (props) => {
  return (
    <ErrorBoundary className='app'>
      <Router>
        <AppTransitionWrapper>
          <div className='wrapper'>
            <AppNav />
            <AppSearch />
            <Suspense fallback={<div>Загрузка...</div>}>
              <Switch>
                <Route path='/' exact render={(props) => <Home {...props} />} />
                <Route path='/movie' exact render={(props) => <Movie {...props} />} />
                <Route component={Error404} />
              </Switch>
            </Suspense>
          </div>
        </AppTransitionWrapper>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
