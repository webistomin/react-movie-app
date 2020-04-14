import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';
import Notifications from 'react-notification-system-redux';

import { Link } from 'react-router-dom';
import AppLazyImage from 'components/ui/AppLazyImage';
import AppRating from 'components/ui/AppRating';
import AppIcon from 'components/ui/AppIcon';

import './AppCard.sass';
import { IMovie } from 'common/types/movie';
import { buildImagePath } from 'utils/buildImagePath';
import { PosterSizes } from 'common/types/images-sizes';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteMovies } from 'store/favorites/selectors';
import { deleteFavoriteMovie, saveFavoriteMovie } from 'store/favorites/actions';
import { IFavoriteMovie } from 'store/favorites/types';

const b = cn('Card');

interface IProps {
  title: IMovie['title'];
  poster_path: IMovie['poster_path'];
  id: IMovie['id'];
  vote_average: IMovie['vote_average'];
  shouldOpenInNewTab?: boolean;
}

// eslint-disable-next-line @typescript-eslint/camelcase
const AppCard: FunctionComponent<IProps> = ({ title, poster_path, id, vote_average, shouldOpenInNewTab }) => {
  const favoriteMovies = useSelector(getFavoriteMovies);
  const dispatch = useDispatch();

  const addToFavoriteMessage = {
    title,
    message: 'has been added to favorite list',
    autoDismiss: 3,
  };

  const removeFromFavoriteMessage = {
    title,
    message: 'has been removed from favorite list',
    autoDismiss: 3,
  };

  const toggleFavoriteState = () => {
    if (favoriteMovies && favoriteMovies.findIndex((movie: IFavoriteMovie) => movie.id === id) !== -1) {
      dispatch(deleteFavoriteMovie(id));
      dispatch(Notifications.success(removeFromFavoriteMessage));
    } else {
      dispatch(
        saveFavoriteMovie({
          title,
          // eslint-disable-next-line @typescript-eslint/camelcase
          poster_path,
          id,
          // eslint-disable-next-line @typescript-eslint/camelcase
          vote_average,
        })
      );
      dispatch(Notifications.success(addToFavoriteMessage));
    }
  };

  const isInFavoriteList = () => {
    return favoriteMovies && favoriteMovies.findIndex((movie: IFavoriteMovie) => movie.id === id) !== -1;
  };

  return (
    <article className={b()}>
      <button
        onClick={toggleFavoriteState}
        aria-label={isInFavoriteList ? 'Remove movie from favorite list' : 'Add movie to favorite list'}
        type='button'
        className={b('Like')}>
        {isInFavoriteList() ? (
          <AppIcon className='Icon_heart' icon='icon-heart-filled' width={24} height={24} />
        ) : (
          <AppIcon className='Icon_heart' icon='icon-heart' width={24} height={24} />
        )}
      </button>
      <Link
        to={`/movie/${id}`}
        className={b('Link')}
        aria-label={`Open ${title} movie`}
        target={shouldOpenInNewTab ? '_blank' : '_self'}>
        <figure className={b('Figure')}>
          <picture className={b('Picture')}>
            <AppLazyImage
              image={buildImagePath(poster_path, PosterSizes.w342)}
              className={b('Img')}
              width={240}
              height={360}
              alt={title}
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
