import React, { FunctionComponent, useEffect, useRef } from 'react';
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
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  const handleClear = () => {
    dispatch(setSearchQuery(''));
  };

  useEffect(() => {
    if (isSearchBarVisible) {
      inputRef?.current?.focus();
    } else {
      inputRef?.current?.blur();
    }
  }, [isSearchBarVisible]);

  return (
    <aside className={b({ visible: isSearchBarVisible })}>
      <form className={b('Form')}>
        <input
          tabIndex={isSearchBarVisible ? 0 : -1}
          ref={inputRef}
          value={searchQuery}
          type='search'
          className={b('Input')}
          placeholder='Search for a movie...'
          onChange={handleChange}
          aria-label='Input movie name'
        />
        <button
          tabIndex={isSearchBarVisible ? 0 : -1}
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
