import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';
import Flickity from 'react-flickity-component';

import AppCard, { AppPersonCard } from 'components/ui/AppCard';
import AppLink from 'components/ui/AppLink';

import './AppCarousel.sass';
import { IMovie } from 'common/types/movie';
import { ICast } from 'common/types/cast';

export const b = cn('CardCarousel');

interface IMovieCarousel extends IProps {
  link?: string;
  items: IMovie[];
  cast?: never;
}

interface IPersonCarousel extends IProps {
  cast: ICast[];
  link?: never;
  items?: never;
}

interface IProps {
  title: string;
  className?: string;
}

type ConditionalCarouselProps = IMovieCarousel | IPersonCarousel;

class AppCarousel extends Component<ConditionalCarouselProps> {
  private flickityOptions = {
    freeScroll: true,
    contain: true,
    cellAlign: 'left',
    prevNextButtons: true,
    pageDots: false,
    freeScrollFriction: 0.2,
    selectedAttraction: 0.01,
    friction: 0.15,
    groupCells: '100%',
  };

  render() {
    const { title, items, cast, link, className } = this.props;

    return (
      <section className={classnames(b(), className)}>
        <div className={b('Heading')}>
          <h2 className={classnames(b('Title'), 'Title')}>{title}</h2>
          {link && (
            <AppLink to={link} color='blue'>
              Explore all
            </AppLink>
          )}
        </div>
        <div className={b('Wrapper')}>
          <Flickity className={b('Slider')} options={this.flickityOptions}>
            {items &&
              items.map((card) => {
                return (
                  <div className={b('Item')} key={card.id}>
                    <AppCard
                      id={card.id}
                      poster_path={card.poster_path}
                      title={card.title}
                      vote_average={card.vote_average}
                    />
                  </div>
                );
              })}
            {cast &&
              cast.map((card) => {
                return (
                  <li className={b('Item')} key={card.id}>
                    <AppPersonCard
                      character={card.character}
                      id={card.id}
                      name={card.name}
                      profile_path={card.profile_path || card.poster_path}
                      linkName={card.name ? 'person' : 'movie'}
                    />
                  </li>
                );
              })}
            {link && (
              <li className={b('Item')}>
                <AppLink to={link} className={b('Explore')} color='white'>
                  Explore all
                </AppLink>
              </li>
            )}
          </Flickity>
        </div>
      </section>
    );
  }
}

export default AppCarousel;
