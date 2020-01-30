import React from 'react';
import AppFooter from '@/components/partials/AppFooter';
import AppNav from '@/components/partials/AppNav';
import '@/assets/sass/main.sass';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <AppNav />
        <AppFooter />
      </Router>
    </div>
  );
}

export default App;
