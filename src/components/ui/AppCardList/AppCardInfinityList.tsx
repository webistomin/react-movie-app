import React, { FunctionComponent, useCallback } from 'react';
import { cn } from '@bem-react/classname';

import AppCard from 'components/ui/AppCard';
import InfiniteScroll from 'react-infinite-scroller';
import { IMovie } from 'common/types/movie';

import './AppCardList.sass';

const b = cn('CardList');

interface IMovieList extends IProps {
  movies: IMovie[];
}

interface IProps {
  title: string;
  onLoadHandler: () => void;
  currentPage: number;
  hasMoreElements: boolean;
}

export const AppCardInfinityList: FunctionComponent<IMovieList> = ({
  title,
  movies,
  onLoadHandler,
  currentPage,
  hasMoreElements,
}) => {
  const loadMoreCards = useCallback(() => {
    onLoadHandler();
  }, [onLoadHandler]);

  return (
    <div className={b()}>
      <div className={b('Heading')}>
        <h2 className={b('Title')}>{title}</h2>
        <strong className={b('Counter')}>{movies?.length} items</strong>
      </div>
      <div className={b('Content')}>
        <InfiniteScroll
          element='ul'
          pageStart={currentPage}
          hasMore={hasMoreElements}
          initialLoad={false}
          loadMore={loadMoreCards}
          className={b('List', { '6items': Boolean(movies) })}>
          {movies &&
            movies.map((movie) => {
              return (
                <li className={b('Item')} key={movie.id}>
                  <AppCard
                    title={movie.title}
                    poster_path={movie.poster_path}
                    id={movie.id}
                    vote_average={movie.vote_average}
                    shouldOpenInNewTab={true}
                  />
                </li>
              );
            })}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default AppCardInfinityList;
