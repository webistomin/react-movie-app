import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cn } from '@bem-react/classname';
import { setSearchQuery, toggleSearchBarVisibility } from 'store/search/actions';
import { getSearchBarVisibility } from 'store/search/selectors';

import { Link } from 'react-router-dom';
import AppIcon from 'components/ui/AppIcon';

import './AppNav.sass';
import { getCurrentLocation } from 'store/router/selectors';

const b = cn('MainNav');

const AppNav: FunctionComponent = () => {
  const pathname = useSelector(getCurrentLocation)?.pathname;
  const dispatch = useDispatch();
  const isSearchBarVisible = useSelector(getSearchBarVisibility);

  const onToggleSearchBarVisibility = () => {
    dispatch(setSearchQuery(''));
    dispatch(toggleSearchBarVisibility(!isSearchBarVisible));
  };

  const navLinks = [
    {
      name: 'Home',
      link: '/',
      icon: 'icon-home',
    },
    {
      name: 'Favorite list',
      link: '/favorite',
      icon: 'icon-heart',
    },
    {
      name: 'Search',
      icon: 'icon-search',
      link: '/search',
      isButton: true,
      action: onToggleSearchBarVisibility,
    },
    {
      name: 'Now playing movies',
      link: '/now-playing',
      icon: 'icon-movie',
    },
    {
      name: 'Upcoming movies',
      link: '/upcoming',
      icon: 'icon-calendar',
    },
    {
      name: 'Popular movies',
      link: '/popular',
      icon: 'icon-flame',
    },
    {
      name: 'Top rated movies',
      link: '/top-rated',
      icon: 'icon-rated',
    },
  ];

  const getNavLinks = () => {
    return navLinks.map((item) => {
      if (item.isButton) {
        return (
          <li className={b('Item')} key={item.name}>
            <button
              type='button'
              className={b('Link', { active: item.link === pathname })}
              title={item.name}
              onClick={item.action}>
              {item.name}
              <AppIcon icon={item.icon} width={24} height={24} className={b('Icon')} />
            </button>
          </li>
        );
      } else {
        return (
          <li className={b('Item')} key={item.name}>
            <Link to={item.link || ''} className={b('Link', { active: item.link === pathname })} title={item.name}>
              {item.name}
              <AppIcon icon={item.icon} width={24} height={24} className={b('Icon')} />
            </Link>
          </li>
        );
      }
    });
  };

  return (
    <nav className={b()}>
      <ul className={b('List')}>{getNavLinks()}</ul>
    </nav>
  );
};

export default AppNav;
