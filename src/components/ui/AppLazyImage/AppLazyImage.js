import React from 'react';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import './AppLazyImage.sass';
import classnames from 'classnames';

class AppLazyImage extends React.Component {
  state = {
    isLoaded: false,
  };

  afterLoad = () => {
    this.setState({
      isLoaded: true,
    });
  };

  render() {
    const { className, scrollPosition } = this.props;
    const { isLoaded } = this.state;

    return (
      <LazyLoadImage
        src='https://image.tmdb.org/t/p/original/ds9GKAMhxv5AbprmZ2xCpK8FiEG.jpg'
        alt='#'
        width='600'
        height='100'
        className={classnames('lazyload', className, { lazyload_loaded: isLoaded })}
        afterLoad={this.afterLoad}
        scrollPosition={scrollPosition}
      />
    );
  }
}

export default trackWindowScroll(AppLazyImage);
