import React, { FunctionComponent, useState } from 'react';
import { cn } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';
import { LazyLoadImage, ScrollPosition, trackWindowScroll } from 'react-lazy-load-image-component';

import './AppLazyImage.sass';

const b = cn('Lazyload');

interface IProps {
  className?: string;
  scrollPosition: ScrollPosition;
  width?: number;
  height?: number;
  image?: string;
}

const AppLazyImage: FunctionComponent<IProps> = ({ className, scrollPosition, image, width, height }) => {
  const [isLoaded, setLoadingState] = useState(false);

  const afterLoad = () => {
    setLoadingState(true);
  };

  return (
    <LazyLoadImage
      src={image}
      alt='#'
      width={width}
      height={height}
      afterLoad={afterLoad}
      scrollPosition={scrollPosition}
      className={classnames(b({ loaded: isLoaded }), className)}
    />
  );
};

export default trackWindowScroll(AppLazyImage);
