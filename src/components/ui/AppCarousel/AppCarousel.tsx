import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';
import Flickity from 'react-flickity-component';

import AppCard, { AppPersonCard } from 'components/ui/AppCard';
import AppLink from 'components/ui/AppLink';

import './AppCarousel.sass';
import { IMovie } from 'common/types/movie';
import { ICast } from 'common/types/cast';

const b = cn('CardCarousel');

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
}

type ConditionalCarouselProps = IMovieCarousel | IPersonCarousel;

class AppCarousel extends Component<ConditionalCarouselProps> {
  private flickityOptions = {
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
    const { title, items, cast, link } = this.props;

    return (
      <section className={b()}>
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
                  <li className={b('Item')} key={card.id}>
                    <AppCard
                      id={card.id}
                      genre_ids={card.genre_ids}
                      overview={card.overview}
                      poster_path={card.poster_path}
                      release_date={card.release_date}
                      title={card.title}
                      vote_average={card.vote_average}
                      adult={card.adult}
                      backdrop_path={card.backdrop_path}
                      original_language={card.original_language}
                      original_title={card.original_title}
                      popularity={card.popularity}
                      video={card.video}
                      vote_count={card.vote_count}
                      runtime={card.runtime}
                    />
                  </li>
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
                      profile_path={card.profile_path}
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
