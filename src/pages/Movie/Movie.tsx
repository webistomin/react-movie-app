import React, { FunctionComponent, useCallback, useEffect } from 'react';

import AppIntro from 'components/ui/AppIntro';
import AppContent from 'components/ui/AppContent';
import AppCarousel from 'components/ui/AppCarousel';
import AppFooter from 'components/partials/AppFooter';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearMovieDetails, fetchMovieDetailsStart } from 'store/movie/details/actions';
import { fetchRecommendedMoviesStart } from 'store/movie/recommended/actions';
import { fetchSimilarMoviesStart } from 'store/movie/similar/actions';
import { getMovieDetails } from 'store/movie/details/selectors';
import { getRecommendedMovies } from 'store/movie/recommended/selectors';
import { getSimilarMovies } from 'store/movie/similar/selectors';
import AppTabs from 'components/ui/AppTabs/AppTabs';
import AppDetails from 'components/ui/AppDetails/AppDetails';
import { parseMovieDetails } from 'components/ui/AppDetails/parseMovieDetails';
import { getMovieCredits } from 'store/movie/credits/selectors';
import { fetchMovieCreditsStart } from 'store/movie/credits/actions';

interface IRouteParams {
  id: string;
}

const Movie: FunctionComponent = () => {
  const dispatch = useDispatch();
  const params = useParams<IRouteParams>();
  const movie = useSelector(getMovieDetails);
  const credits = useSelector(getMovieCredits);
  const recommended = useSelector(getRecommendedMovies);
  const similar = useSelector(getSimilarMovies);

  useEffect(() => {
    dispatch(fetchMovieDetailsStart(Number(params.id)));
    dispatch(fetchMovieCreditsStart(Number(params.id)));
    dispatch(fetchRecommendedMoviesStart(Number(params.id)));
    dispatch(fetchSimilarMoviesStart(Number(params.id)));

    return () => {
      dispatch(clearMovieDetails());
    };
  }, [dispatch, params]);

  const renderMovieOverview = useCallback(() => {
    if (!movie) {
      return null;
    }

    const parsedDetails = parseMovieDetails(movie);
    return (
      <>
        <AppDetails title='Storyline' poster={movie?.poster_path} overview={movie?.overview} details={parsedDetails} />
        {credits && <AppCarousel title='Cast' cast={credits.cast} />}
      </>
    );
  }, [credits, movie]);

  const renderMovieVideos = useCallback(() => {
    return <div>Videos</div>;
  }, []);

  const renderMoviePhotos = useCallback(() => {
    return <div>Photos</div>;
  }, []);

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
        <AppTabs
          tabs={[
            {
              id: 'movie-overview',
              title: 'Overview',
              component: renderMovieOverview(),
            },
            {
              id: 'movie-videos',
              title: 'Videos',
              component: renderMovieVideos(),
            },
            {
              id: 'movie-photos',
              title: 'Photos',
              component: renderMoviePhotos(),
            },
          ]}
        />
        {recommended && <AppCarousel title='Recommended movies' items={recommended.results} />}
        {similar && <AppCarousel title='Similar movies' items={similar.results} />}
      </AppContent>
      <AppFooter />
    </>
  );
};

export default Movie;
