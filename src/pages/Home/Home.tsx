import React, { FunctionComponent, useEffect } from 'react';

import AppIntro from 'components/ui/AppIntro';
import AppCarousel from 'components/ui/AppCarousel';
import AppContent from 'components/ui/AppContent';
import AppFooter from 'components/partials/AppFooter';
import { useDispatch } from 'react-redux';
import { fetchLatestMovieStart } from 'store/movie/actions';

const Home: FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'Home, sweet home :: 💚';
    dispatch(fetchLatestMovieStart());
  }, [dispatch]);

  return (
    <>
      <AppContent>
        <AppIntro />
        <AppCarousel />
        <AppCarousel />
      </AppContent>
      <AppFooter />
    </>
  );
};

export default Home;
