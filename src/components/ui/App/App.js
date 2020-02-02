import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import todoApp from '@/store/reducers';
import '@/assets/sass/main.sass';
import AppNav from '@/components/partials/AppNav';
import Home from '@/pages/Home';
import Error404 from '@/pages/Error404';
import AppSearch from '@/components/partials/AppSearch';

// const store = createStore(movieApp);

const App = (props) => {
  return (
    <div className='app'>
      <Router>
        <AppNav />
        <AppSearch />
        <Switch>
          <Route path='/' exact render={(props) => <Home {...props} />} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
