import React, { FunctionComponent, useEffect } from 'react';

import AppIntro from 'components/ui/AppIntro';
import AppContent from 'components/ui/AppContent';
import AppCarousel from 'components/ui/AppCarousel';
import AppFooter from 'components/partials/AppFooter';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieDetailsStart } from 'store/movie/details/actions';
import { fetchRecommendedMoviesStart } from 'store/movie/recommended/actions';
import { fetchSimilarMoviesStart } from 'store/movie/similar/actions';

interface IRouteParams {
  id: string;
}

const Movie: FunctionComponent = () => {
  const dispatch = useDispatch();
  const params = useParams<IRouteParams>();

  useEffect(() => {
    dispatch(fetchMovieDetailsStart(Number(params.id)));
    dispatch(fetchRecommendedMoviesStart(Number(params.id)));
    dispatch(fetchSimilarMoviesStart(Number(params.id)));
  }, [params, dispatch]);

  return (
    <>
      <AppContent>
        <AppIntro />
        {/*<AppCarousel />*/}
        {/*<AppCarousel />*/}
      </AppContent>
      <AppFooter />
    </>
  );
};

export default Movie;
