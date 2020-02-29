import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';

import { Link } from 'react-router-dom';
import AppLazyImage from 'components/ui/AppLazyImage';
import AppRating from 'components/ui/AppRating';
import AppIcon from 'components/ui/AppIcon';

import './AppCard.sass';
import { IMovie } from 'store/movie/popular/types';
import { buildImagePath } from 'utils/buildImagePath';
import { PosterSizes } from 'common/image/types';

const b = cn('Card');

type IProps = IMovie;

// eslint-disable-next-line @typescript-eslint/camelcase
const AppCard: FunctionComponent<IProps> = ({ title, poster_path, id, vote_average }) => {
  return (
    <article className={b()}>
      <button type='button' className={b('Like')}>
        <AppIcon className='Icon_heart' icon='icon-heart' width={24} height={24} />
      </button>
      <Link to={`/movie/${id}`} className={b('Link')}>
        <figure className={b('Figure')}>
          <picture className={b('Picture')}>
            <AppLazyImage image={buildImagePath(poster_path, PosterSizes.w342)} className={b('Img')} />
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
