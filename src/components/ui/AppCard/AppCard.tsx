import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';

import { Link } from 'react-router-dom';
import AppLazyImage from 'components/ui/AppLazyImage';
import AppRating from 'components/ui/AppRating';
import AppIcon from 'components/ui/AppIcon';

import './AppCard.sass';

const b = cn('Card');

const AppCard: FunctionComponent = () => {
  return (
    <article className={b()}>
      <button type='button' className={b('Like')}>
        <AppIcon className='Icon_heart' icon='icon-heart' width={24} height={24} />
      </button>
      <Link to='/' className={b('Link')}>
        <figure className={b('Figure')}>
          <picture className={b('Picture')}>
            <AppLazyImage className={b('Img')} />
          </picture>
        </figure>
        <h2 className={b('Name')}>Joker</h2>
        <AppRating className={b('Rating')} />
      </Link>
    </article>
  );
};

export default AppCard;
