import React from 'react';
import './AppIntro.sass';
import AppRating from '../AppRating';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const AppIntro = (props) => {
  const afterLoad = () => {
    document.querySelector('.intro__img').classList.add('visible');
  };

  return (
    <div className='intro'>
      <div className='intro__inner'>
        <h1 className='intro__title title'>1917</h1>
        <div className='intro__info'>
          <AppRating />
        </div>
        <p className='intro__desc'>
          At the height of the First World War, two young British soldiers, Schofield and Blake are given a seemingly impossible mission. In a race
          against time, they must cross enemy territory and deliver...
        </p>
      </div>
      <figure className='intro__figure'>
        <picture className='intro__pic'>
          <LazyLoadImage
            src='https://image.tmdb.org/t/p/original/ds9GKAMhxv5AbprmZ2xCpK8FiEG.jpg'
            alt='#'
            className='intro__img'
            afterLoad={afterLoad}
          />
        </picture>
      </figure>
    </div>
  );
};

export default AppIntro;
