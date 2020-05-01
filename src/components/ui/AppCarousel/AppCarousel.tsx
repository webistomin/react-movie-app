import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';
import Flickity from 'react-flickity-component';
import { IMovie } from 'common/types/movie';
import { ICast } from 'common/types/cast';

import AppCard, { AppPersonCard } from 'components/ui/AppCard';
import AppLink from 'components/ui/AppLink';

import './AppCarousel.sass';
import AppExploreCard from 'components/ui/AppCard/AppExploreCard';

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
    resize: true,
  };

  render() {
    const { title, items, cast, link, className } = this.props;
    let flkty = null;

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
          <Flickity className={b('Slider')} options={this.flickityOptions} flickityRef={(ref) => (flkty = ref)}>
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
                  <div className={b('Item')} key={card.id}>
                    <AppPersonCard
                      character={card.character}
                      id={card.id}
                      name={card.name || card.title}
                      profile_path={card.profile_path || card.poster_path}
                      linkName={card.name ? 'person' : 'movie'}
                    />
                  </div>
                );
              })}
            {link && (
              <div className={b('Item')}>
                <AppExploreCard link={link} />
              </div>
            )}
          </Flickity>
        </div>
      </section>
    );
  }
}

export default AppCarousel;
