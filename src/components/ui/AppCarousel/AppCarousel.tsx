import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';
import Flickity from 'react-flickity-component';

import AppCard from 'components/ui/AppCard';
import AppLink from 'components/ui/AppLink';

import './AppCarousel.sass';

const b = cn('CardCarousel');

class AppCarousel extends Component {
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
      <section className={b()}>
        <div className={b('Heading')}>
          <h2 className={classnames(b('Title'), 'Title')}>Popular movies</h2>
          <AppLink to='/' color='blue'>
            Explore all
          </AppLink>
        </div>
        <div className={b('Wrapper')}>
          <Flickity className={b('Slider')} options={this.flickityOptions}>
            <li className={b('Item')}>
              <AppCard />
            </li>
            <li className={b('Item')}>
              <AppCard />
            </li>
            <li className={b('Item')}>
              <AppCard />
            </li>
            <li className={b('Item')}>
              <AppCard />
            </li>
            <li className={b('Item')}>
              <AppCard />
            </li>
            <li className={b('Item')}>
              <AppCard />
            </li>
            <li className={b('Item')}>
              <AppCard />
            </li>
            <li className={b('Item')}>
              <AppCard />
            </li>
            <li className={b('Item')}>
              <AppCard />
            </li>
            <li className={b('Item')}>
              <AppCard />
            </li>
            <li className={b('Item')}>
              <AppLink to='/' className={b('Explore')} color='white'>
                Explore all
              </AppLink>
            </li>
          </Flickity>
        </div>
      </section>
    );
  }
}

export default AppCarousel;
