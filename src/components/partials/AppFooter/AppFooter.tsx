import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';

import AppSocials from 'components/ui/AppSocials';

import './AppFooter.sass';

const b = cn('PageFooter');

const AppFooter: FunctionComponent = () => {
  return (
    <footer className={b()}>
      <p className={b('Text')}>© 2020 Alexey Istomin. All rights reserved.</p>
      <p className={b('Text')}>Designed and built by me, data provided by TMDb.</p>
      <AppSocials className={b('Socials')} />
    </footer>
  );
};

export default AppFooter;
