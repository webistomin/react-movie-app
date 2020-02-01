import React from 'react';
import classnames from 'classnames';
import AppIcon from '@/components/ui/AppIcon';
import './AppRating.sass';

const AppRating = ({ className }) => {
  return (
    <div className={classnames('rating', className)}>
      <div className='rating__box'>
        <div className='rating__all'>
          <AppIcon className='rating__star rating__star_bordered' icon='icon-star' width='18' height='18' />
          <AppIcon className='rating__star rating__star_bordered' icon='icon-star' width='18' height='18' />
          <AppIcon className='rating__star rating__star_bordered' icon='icon-star' width='18' height='18' />
          <AppIcon className='rating__star rating__star_bordered' icon='icon-star' width='18' height='18' />
          <AppIcon className='rating__star rating__star_bordered' icon='icon-star' width='18' height='18' />
        </div>
        <div className='rating__current'>
          <AppIcon className='rating__star rating__star_filled' icon='icon-star-filled' width='18' height='18' />
          <AppIcon className='rating__star rating__star_filled' icon='icon-star-filled' width='18' height='18' />
          <AppIcon className='rating__star rating__star_filled' icon='icon-star-filled' width='18' height='18' />
          <AppIcon className='rating__star rating__star_filled' icon='icon-star-filled' width='18' height='18' />
          <AppIcon className='rating__star rating__star_filled' icon='icon-star-filled' width='18' height='18' />
        </div>
      </div>
    </div>
  );
};

export default AppRating;
