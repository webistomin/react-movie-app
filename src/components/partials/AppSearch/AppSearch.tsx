import React, { FunctionComponent, MutableRefObject, useEffect, useRef } from 'react';
import debounce from 'lodash.debounce';
import { cn } from '@bem-react/classname';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchBarVisibility, getSearchQuery } from 'store/search/selectors';
import { setSearchQuery } from 'store/search/actions';
import { Redirect } from 'react-router';
import { useLocation, useParams } from 'react-router-dom';

import AppIcon from 'components/ui/AppIcon';

import './AppSearch.sass';

const b = cn('Search');

const AppSearch: FunctionComponent = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = useParams();
  const searchInput = useRef() as MutableRefObject<HTMLInputElement>;
  const isSearchBarVisible = useSelector(getSearchBarVisibility);
  const searchQuery = useSelector(getSearchQuery);

  useEffect(() => {
    console.log(location);
    console.log(params);
    if (searchInput?.current) {
      searchInput.current.value = searchQuery;
    }
  }, [searchInput, searchQuery]);

  const onSetSearchQuery = (value: string): void => {
    dispatch(setSearchQuery(value));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    handleInputDebounced(event);
  };

  const handleClear = () => {
    onSetSearchQuery('');
    searchInput.current.value = '';
  };

  const handleInputDebounced = debounce((event) => {
    onSetSearchQuery(event.target.value);
  }, 200);

  if (searchInput?.current?.value && !location.pathname.includes('search')) {
    return <Redirect to={`/search?query=${searchInput.current.value}`} />;
  }

  return (
    <aside className={b({ visible: isSearchBarVisible })}>
      <form className={b('Form')}>
        <input
          type='search'
          className={b('Input')}
          placeholder='Search for a movie...'
          onChange={handleChange}
          ref={searchInput}
        />
        <button type='button' className={b('Clear', { visible: Boolean(searchQuery) })} onClick={handleClear}>
          <AppIcon icon='icon-cross' width={24} height={24} />
        </button>
      </form>
    </aside>
  );
};

export default AppSearch;
