import React, { FunctionComponent, useCallback, useEffect } from 'react';

import AppIntro from 'components/ui/AppIntro';
import AppContent from 'components/ui/AppContent';
// import AppCarousel from 'components/ui/AppCarousel';
import AppFooter from 'components/partials/AppFooter';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearMovieDetails, fetchMovieDetailsStart } from 'store/movie/details/actions';
import { fetchRecommendedMoviesStart } from 'store/movie/recommended/actions';
import { fetchSimilarMoviesStart } from 'store/movie/similar/actions';
import { getMovieDetails } from 'store/movie/details/selectors';
import { getRecommendedMovies } from 'store/movie/recommended/selectors';

interface IRouteParams {
  id: string;
}

const Movie: FunctionComponent = () => {
  const dispatch = useDispatch();
  const params = useParams<IRouteParams>();
  const movie = useSelector(getMovieDetails);
  const recommended = useSelector(getRecommendedMovies);

  useEffect(() => {
    dispatch(fetchMovieDetailsStart(Number(params.id)));
    dispatch(fetchRecommendedMoviesStart(Number(params.id)));
    dispatch(fetchSimilarMoviesStart(Number(params.id)));

    return () => {
      dispatch(clearMovieDetails());
    };
  }, [dispatch, params]);

  return (
    <>
      <AppContent>
        <AppIntro
          overview={movie?.overview}
          backdrop_path={movie?.backdrop_path}
          id={movie?.id}
          original_title={movie?.title}
          release_date={movie?.release_date}
          runtime={movie?.runtime}
          vote_average={movie?.vote_average}
        />
        {/*  <AppCarousel items={recommended.results} />*/}
        {/*<AppCarousel />*/}
      </AppContent>
      <AppFooter />
    </>
  );
};

export default Movie;
