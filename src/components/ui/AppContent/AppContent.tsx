import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';

import './AppContent.sass';

const b = cn('PageContent');

const AppContent: FunctionComponent = (props) => {
  return <main className={b()}>{props.children}</main>;
};

export default AppContent;
