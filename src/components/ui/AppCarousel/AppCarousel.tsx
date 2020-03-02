import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';
import Flickity from 'react-flickity-component';

import AppCard from 'components/ui/AppCard';
import AppLink from 'components/ui/AppLink';

import './AppCarousel.sass';
import { IMovie } from 'common/types/movie';

const b = cn('CardCarousel');

interface IProps {
  title: string;
  items: Array<IMovie>;
}

class AppCarousel extends Component<IProps> {
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
    const { title, items } = this.props;

    return (
      <section className={b()}>
        <div className={b('Heading')}>
          <h2 className={classnames(b('Title'), 'Title')}>{title}</h2>
          <AppLink to='/' color='blue'>
            Explore all
          </AppLink>
        </div>
        <div className={b('Wrapper')}>
          <Flickity className={b('Slider')} options={this.flickityOptions}>
            {items.map((card) => {
              return (
                <li className={b('Item')} key={card.id}>
                  <AppCard
                    id={card.id}
                    genre_ids={card.genre_ids}
                    overview={card.overview}
                    poster_path={card.poster_path}
                    release_date={card.release_date}
                    title={card.title}
                    vote_average={card.vote_average}
                  />
                </li>
              );
            })}
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
