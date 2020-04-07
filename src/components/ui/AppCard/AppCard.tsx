import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';

import { Link } from 'react-router-dom';
import AppLazyImage from 'components/ui/AppLazyImage';
import AppRating from 'components/ui/AppRating';
import AppIcon from 'components/ui/AppIcon';

import './AppCard.sass';
import { IMovie } from 'common/types/movie';
import { buildImagePath } from 'utils/buildImagePath';
import { PosterSizes } from 'common/types/images-sizes';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteMovieIds } from 'store/favorites/selectors';
import { deleteFavoriteMovie, saveFavoriteMovie } from 'store/favorites/actions';

const b = cn('Card');

interface IProps {
  title: IMovie['title'];
  poster_path: IMovie['poster_path'];
  id: IMovie['id'];
  vote_average: IMovie['vote_average'];
}

// eslint-disable-next-line @typescript-eslint/camelcase
const AppCard: FunctionComponent<IProps> = ({ title, poster_path, id, vote_average }) => {
  const favoriteMovies = useSelector(getFavoriteMovieIds);
  const dispatch = useDispatch();

  const toggleFavoriteState = () => {
    if (favoriteMovies && favoriteMovies.indexOf(id) !== -1) {
      dispatch(deleteFavoriteMovie(id));
    } else {
      dispatch(saveFavoriteMovie(id));
    }
  };

  const isInFavoriteList = () => {
    return favoriteMovies && favoriteMovies.indexOf(id) !== -1;
  };

  return (
    <article className={b()}>
      <button onClick={toggleFavoriteState} type='button' className={b('Like')}>
        {isInFavoriteList() ? (
          <AppIcon className='Icon_heart' icon='icon-heart-filled' width={24} height={24} />
        ) : (
          <AppIcon className='Icon_heart' icon='icon-heart' width={24} height={24} />
        )}
      </button>
      <Link to={`/movie/${id}`} className={b('Link')}>
        <figure className={b('Figure')}>
          <picture className={b('Picture')}>
            <AppLazyImage
              image={buildImagePath(poster_path, PosterSizes.w342)}
              className={b('Img')}
              width={240}
              height={360}
            />
          </picture>
        </figure>
        <h2 className={b('Name')}>{title}</h2>
        {/* eslint-disable-next-line @typescript-eslint/camelcase */}
        <AppRating rating={vote_average} className={b('Rating')} />
      </Link>
    </article>
  );
};

export default AppCard;
