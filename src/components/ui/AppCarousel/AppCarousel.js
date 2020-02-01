import React from 'react';
import './AppCarousel.sass';
import Flickity from 'react-flickity-component';
import AppCard from '../AppCard';
import { Link } from 'react-router-dom';

class AppCarousel extends React.Component {
  flickityOptions = {
    freeScroll: true,
    contain: true,
    prevNextButtons: true,
    pageDots: false,
    freeScrollFriction: 0.2,
    selectedAttraction: 0.01,
    friction: 0.15,
    groupCells: '100%',
  };

  render() {
    return (
      <section className='card-carousel'>
        <div className='card-carousel__heading'>
          <h2 className='card-carousel__title title'>Popular movies</h2>
          <Link to='/'>Explore all</Link>
        </div>
        <div className='card-carousel__wrapper'>
          <Flickity className='card-carousel__slider' options={this.flickityOptions}>
            <li className='card-carousel__item'>
              <AppCard />
            </li>
            <li className='card-carousel__item'>
              <AppCard />
            </li>
            <li className='card-carousel__item'>
              <AppCard />
            </li>
            <li className='card-carousel__item'>
              <AppCard />
            </li>
            <li className='card-carousel__item'>
              <AppCard />
            </li>
            <li className='card-carousel__item'>
              <AppCard />
            </li>
            <li className='card-carousel__item'>
              <AppCard />
            </li>
            <li className='card-carousel__item'>
              <AppCard />
            </li>
            <li className='card-carousel__item'>
              <AppCard />
            </li>
            <li className='card-carousel__item'>
              <AppCard />
            </li>
            <li className='card-carousel__item'>
              <AppCard />
            </li>
            <li className='card-carousel__item'>
              <AppCard />
            </li>
            <li className='card-carousel__item'>
              <Link to='/' className='card-carousel__explore'>
                Explore all
              </Link>
            </li>
          </Flickity>
        </div>
      </section>
    );
  }
}

export default AppCarousel;
