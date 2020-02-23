import React, { FunctionComponent } from 'react';
import block from 'bem-cn';

import './AppContent.sass';

const b = block('PageContent');

const AppContent: FunctionComponent = (props) => {
  return <main className={b()}>{props.children}</main>;
};

export default AppContent;
