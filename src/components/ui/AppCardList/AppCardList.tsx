import React, { FunctionComponent } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { cn } from '@bem-react/classname';

import AppCard from 'components/ui/AppCard';

import './AppCardList.sass';

const b = cn('CardList');

const AppCardList: FunctionComponent = () => {
  let counter = 0;

  const items = [
    1,
    2,
    3,
    45,
    5,
    6,
    7,
    8,
    9,
    1,
    2,
    312,
    3,
    3,
    2,
    2,
    4,
    5,
    6,
    6,
    5,
    3,
    45,
    5,
    6,
    4,
    2,
    4,
    5,
    6,
    4,
    3,
    2,
    4,
    4,
    56,
    2,
  ].map((item, index) => {
    return (
      <li className={b('Item')} key={index}>
        <AppCard />
      </li>
    );
  });

  const hasMoreItems = true;

  const loadItems = () => {
    [1, 2, 3].map((item, index) => {
      return items.push(
        <li className={b('Item')} key={counter++}>
          <AppCard />
        </li>
      );
    });
  };

  const loader = (
    <div className='Loader' key={'fsdfds'}>
      Loading ...
    </div>
  );

  return (
    <div className={b()}>
      <div className={b('Heading')}>
        <h2 className={b('Title')}>Popular movies</h2>
      </div>
      <InfiniteScroll hasMore={hasMoreItems} className={b('List')} element='ul' loadMore={loadItems} loader={loader}>
        {items}
      </InfiniteScroll>
    </div>
  );
};

export default AppCardList;
