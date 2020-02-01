import React from 'react';
import AppFooter from '@/components/partials/AppFooter';
import AppNav from '@/components/partials/AppNav';
import '@/assets/sass/main.sass';
import { BrowserRouter as Router } from 'react-router-dom';
import AppIntro from '../AppIntro';
import AppContent from '../AppContent';
import AppCarousel from '../AppCarousel';

function App() {
  return (
    <div className='app'>
      <Router>
        <AppNav />
        <AppContent>
          <AppIntro />
          <AppCarousel />
        </AppContent>
        <AppFooter />
      </Router>
    </div>
  );
}

export default App;
