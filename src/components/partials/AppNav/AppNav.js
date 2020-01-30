import React from 'react';
import './AppNav.sass';

const AppNav = () => {
  return (
    <nav className='main-nav'>
      <ul className='main-nav__list'>
        <li className='main-nav__item'>
          <a href='#test' className='main-nav__link'>
            Home
          </a>
        </li>
        <li className='main-nav__item'>
          <a href='#test' className='main-nav__link'>
            Movies
          </a>
        </li>
        <li className='main-nav__item'>
          <a href='#test' className='main-nav__link'>
            TV
          </a>
        </li>
        <li className='main-nav__item'>
          <button type='button' className='main-nav__link'>
            Search
            <svg width='24' height='24'>
              <use xlinkHref='#icon-github'></use>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;
