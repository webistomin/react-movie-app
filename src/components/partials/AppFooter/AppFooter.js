import React from 'react';
import './AppFooter.sass';
import AppSocials from '../../ui/AppSocials';

const AppFooter = () => {
  return (
    <footer className='page-footer'>
      <p className='page-footer__text'>© 2020 Alexey Istomin. All rights reserved.</p>
      <p className='page-footer__text'>Designed and built by me, data provided by TMDb.</p>
      <AppSocials className='page-footer__socials' />
    </footer>
  );
};

export default AppFooter;
