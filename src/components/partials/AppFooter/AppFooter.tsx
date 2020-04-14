import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';

import AppSocials from 'components/ui/AppSocials';

import './AppFooter.sass';

const b = cn('PageFooter');

const AppFooter: FunctionComponent = () => {
  return (
    <footer className={b()}>
      {/*<p className={b('Text')}>© 2020 Alexey Istomin</p>*/}
      <p className={b('Text')}>
        Built on top of React/Redux/Saga and TypeScript.
        <br />
        Data provided by TMDb.
      </p>
      {/*<AppSocials className={b('Socials')} />*/}
    </footer>
  );
};

export default AppFooter;
