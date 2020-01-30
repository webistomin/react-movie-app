import React from 'react';
import { Link } from 'react-router-dom';
import './AppNav.sass';
import AppIcon from '@/components/ui/AppIcon';

const AppNav = () => {
  const navLinks = [
    {
      name: 'Home',
      link: '/',
      icon: 'icon-home',
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
    {
      name: 'Search',
      icon: 'icon-search',
      isButton: true,
    },
  ];

  const getNavLinks = () => {
    return navLinks.map((item) => {
      if (item.isButton) {
        return (
          <li className='main-nav__item' key={item.name}>
            <button type='button' className='main-nav__link' title={item.name}>
              {item.name}
              <AppIcon icon={item.icon} width='24' height='24' className='main-nav__icon' />
            </button>
          </li>
        );
      } else {
        return (
          <li className='main-nav__item' key={item.name}>
            <Link to={item.link} className='main-nav__link' title={item.name}>
              {item.name}
              <AppIcon icon={item.icon} width='24' height='24' className='main-nav__icon' />
            </Link>
          </li>
        );
      }
    });
  };

  return (
    <nav className='main-nav'>
      <ul className='main-nav__list'>{getNavLinks()}</ul>
    </nav>
  );
};

export default AppNav;
