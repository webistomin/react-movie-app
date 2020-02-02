import React from 'react';
import classnames from 'classnames';
import debounce from 'lodash.debounce';
import AppIcon from '@/components/ui/AppIcon';
import './AppSearch.sass';

export default class AppSearch extends React.Component {
  searchInput = React.createRef();

  state = {
    searchQuery: '',
    isSearchBarVisible: false,
  };

  handleChange = (event) => {
    event.persist();
    this.handleInputDebounced(event);
  };

  handleClear = () => {
    this.setState({ searchQuery: '' });
    this.searchInput.current.value = '';
  };

  handleInputDebounced = debounce((event) => {
    this.setState({ searchQuery: event?.target?.value });
  }, 200);

  render() {
    const { searchQuery, isSearchBarVisible } = this.state;

    return (
      <div className={classnames('search', { search_visible: isSearchBarVisible })}>
        <form className='search__form'>
          <input
            type='search'
            className='search__input'
            placeholder='Search for a movie...'
            onChange={this.handleChange}
            ref={this.searchInput}
          />
          <button
            type='button'
            className={classnames('search__clear', { search__clear_visible: searchQuery })}
            onClick={this.handleClear}>
            <AppIcon icon='icon-cross' width='24' height='24' />
          </button>
        </form>
      </div>
    );
  }
}
