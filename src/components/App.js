import React from 'react';
import AppFooter from '@/components/partials/AppFooter';
import AppNav from '@/components/partials/AppNav';
import '@/assets/sass/main.sass';

function App() {
  return (
    <div className='App'>
      <AppNav />
      <AppFooter />
    </div>
  );
}

export default App;
