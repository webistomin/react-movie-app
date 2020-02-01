import React from 'react';
import './AppSocials.sass';
import AppLink from '../AppLink';
import AppIcon from '../AppIcon';
import classnames from 'classnames';

const AppSocials = ({ className }) => {
  return (
    <div className={classnames('socials', className)}>
      <ul className='socials__list'>
        <li className='socials__item'>
          <AppLink to='/' className='socials__link' color='grey'>
            <AppIcon className='icon_mail' icon='icon-mail' width='24' height='24' />
          </AppLink>
        </li>
        <li className='socials__item'>
          <AppLink to='/' className='socials__link' color='grey'>
            <AppIcon className='icon_github' icon='icon-github' width='24' height='24' />
          </AppLink>
        </li>
      </ul>
    </div>
  );
};

export default AppSocials;
