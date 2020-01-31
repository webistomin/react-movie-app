import React from 'react';
import AppFooter from '@/components/partials/AppFooter';
import AppNav from '@/components/partials/AppNav';
import '@/assets/sass/main.sass';
import { BrowserRouter as Router } from 'react-router-dom';
import AppIntro from '../AppIntro';
import AppContent from '../AppContent';

function App() {
  return (
    <div className='app'>
      <Router>
        <AppNav />
        <AppContent>
          <AppIntro />
        </AppContent>
        <AppFooter />
      </Router>
    </div>
  );
}

export default App;
