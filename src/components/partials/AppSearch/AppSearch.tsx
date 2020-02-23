import React, { FunctionComponent, MutableRefObject, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import { cn } from '@bem-react/classname';

import AppIcon from 'components/ui/AppIcon';

import './AppSearch.sass';

const b = cn('Search');

const AppSearch: FunctionComponent = () => {
  const searchInput = useRef() as MutableRefObject<HTMLInputElement>;
  const [searchQuery, setSearchQuery] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isSearchBarVisible, setSearchBarVisibility] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    handleInputDebounced(event);
  };

  const handleClear = () => {
    setSearchQuery('');
    searchInput.current.value = '';
  };

  const handleInputDebounced = debounce((event) => {
    setSearchQuery(event.target.value);
  }, 200);

  return (
    <div className={b({ visible: isSearchBarVisible })}>
      <form className={b('Form')}>
        <input
          type='search'
          className={b('Input')}
          placeholder='Search for a movie...'
          onChange={handleChange}
          ref={searchInput}
        />
        <button type='button' className={b('Clear', { visible: searchQuery })} onClick={handleClear}>
          <AppIcon icon='icon-cross' width={24} height={24} />
        </button>
      </form>
    </div>
  );
};

export default AppSearch;
