import React, { FunctionComponent, useState } from 'react';
import { cn } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';
import { LazyLoadImage, ScrollPosition, trackWindowScroll } from 'react-lazy-load-image-component';

import './AppLazyImage.sass';

const b = cn('Lazyload');

interface IProps {
  className: string;
  scrollPosition: ScrollPosition;
}

const AppLazyImage: FunctionComponent<IProps> = ({ className, scrollPosition }) => {
  const [isLoaded, setLoadingState] = useState(false);

  const afterLoad = () => {
    setLoadingState(true);
  };

  return (
    <LazyLoadImage
      src='https://image.tmdb.org/t/p/original/ds9GKAMhxv5AbprmZ2xCpK8FiEG.jpg'
      alt='#'
      width='600'
      height='100'
      afterLoad={afterLoad}
      scrollPosition={scrollPosition}
      className={classnames(b({ loaded: isLoaded }), className)}
    />
  );
};

export default trackWindowScroll(AppLazyImage);
