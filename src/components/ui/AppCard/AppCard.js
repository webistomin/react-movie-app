import React from 'react';
import './AppCard.sass';
import { Link } from 'react-router-dom';
import AppLazyImage from '../AppLazyImage';
import AppRating from '../AppRating';
import AppIcon from '../AppIcon';

const AppCard = () => {
  return (
    <article className='card'>
      <Link to='/' className='card__link'>
        <figure className='card__figure'>
          <button type='button' className='card__like'>
            <AppIcon className='icon_heart' icon='icon-heart' width='24' height='24' />
          </button>
          <picture className='card__picture'>
            <AppLazyImage className='card__img' />
          </picture>
        </figure>
        <h2 className='card__name'>Joker</h2>
        <AppRating className='card__rating' />
      </Link>
    </article>
  );
};

export default AppCard;
