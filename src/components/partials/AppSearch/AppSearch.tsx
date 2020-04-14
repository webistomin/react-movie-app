import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchBarVisibility, getSearchQuery } from 'store/search/selectors';
import { setSearchQuery } from 'store/search/actions';

import AppIcon from 'components/ui/AppIcon';

import './AppSearch.sass';

const b = cn('Search');

const AppSearch: FunctionComponent = () => {
  const dispatch = useDispatch();
  const isSearchBarVisible = useSelector(getSearchBarVisibility);
  const searchQuery = useSelector(getSearchQuery);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  const handleClear = () => {
    dispatch(setSearchQuery(''));
  };

  return (
    <aside className={b({ visible: isSearchBarVisible })}>
      <form className={b('Form')}>
        <input
          value={searchQuery}
          type='search'
          className={b('Input')}
          placeholder='Search for a movie...'
          onChange={handleChange}
          aria-label='Input movie name'
        />
        <button
          type='button'
          className={b('Clear', { visible: Boolean(searchQuery) })}
          onClick={handleClear}
          aria-label='Clear search query'>
          <AppIcon icon='icon-cross' width={24} height={24} />
        </button>
      </form>
    </aside>
  );
};

export default AppSearch;
