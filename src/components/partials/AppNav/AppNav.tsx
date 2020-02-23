import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';

import AppIcon from 'components/ui/AppIcon';

import './AppNav.sass';
import { Link } from 'react-router-dom';

const b = cn('MainNav');

const AppNav: FunctionComponent = () => {
  const navLinks = [
    {
      name: 'Home',
      link: '/',
      icon: 'icon-home',
    },
    {
      name: 'Account',
      link: '/',
      icon: 'icon-user',
    },
    {
      name: 'Favorite list',
      link: '/',
      icon: 'icon-heart',
    },
    {
      name: 'Search',
      icon: 'icon-search',
      isButton: true,
    },
    {
      name: 'Movies',
      link: '/movies',
      icon: 'icon-movie',
    },
    {
      name: 'TV',
      link: '/tv',
      icon: 'icon-tv',
    },
  ];

  const getNavLinks = () => {
    return navLinks.map((item) => {
      if (item.isButton) {
        return (
          <li className={b('Item')} key={item.name}>
            <button type='button' className={b('Link')} title={item.name}>
              {item.name}
              <AppIcon icon={item.icon} width={24} height={24} className={b('Icon')} />
            </button>
          </li>
        );
      } else {
        return (
          <li className={b('Item')} key={item.name}>
            <Link to={item.link || ''} className={b('Link')} title={item.name}>
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
