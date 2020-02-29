import React, { FunctionComponent, useEffect } from 'react';

import AppIntro from 'components/ui/AppIntro';
import AppCarousel from 'components/ui/AppCarousel';
import AppContent from 'components/ui/AppContent';
import AppFooter from 'components/partials/AppFooter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLatestMovieStart } from 'store/movie/latest/actions';
import { fetchPopularMoviesStart } from 'store/movie/popular/actions';
import { getPopularMovies } from 'store/movie/popular/selectors';

const Home: FunctionComponent = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(getPopularMovies);

  useEffect(() => {
    document.title = 'Home, sweet home :: 💚';
    dispatch(fetchLatestMovieStart());
    dispatch(fetchPopularMoviesStart());
  }, [dispatch]);

  return (
    <>
      <AppContent>
        <AppIntro />
        {popularMovies ? <AppCarousel title='Popular movies' items={popularMovies.results} /> : null}
        {/*<AppCarousel />*/}
      </AppContent>
      <AppFooter />
    </>
  );
};

export default Home;
