import React, { FunctionComponent, useState } from 'react';
import { cn } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';
import { LazyLoadImage, ScrollPosition, trackWindowScroll } from 'react-lazy-load-image-component';
import notFound from 'src/assets/img/not-found.svg';

import './AppLazyImage.sass';

const b = cn('Lazyload');

interface IProps {
  className?: string;
  scrollPosition: ScrollPosition;
  width?: number;
  height?: number;
  image?: string;
  alt?: string;
}

const AppLazyImage: FunctionComponent<IProps> = ({ className, alt, scrollPosition, image, width, height }) => {
  const [isLoaded, setLoadingState] = useState(false);

  const afterLoad = () => {
    setLoadingState(true);
  };

  const currentImage = image ? image : notFound;

  return (
    <LazyLoadImage
      src={currentImage}
      alt={alt || '#'}
      width={width}
      height={height}
      afterLoad={afterLoad}
      threshold={1}
      scrollPosition={scrollPosition}
      className={classnames(b({ loaded: isLoaded, contain: !image }), className)}
    />
  );
};

export default trackWindowScroll(AppLazyImage);
