import React from 'react';
import './AppContent.sass';

const AppContent = (props) => {
  return <main className='page-content'>{props.children}</main>;
};

export default AppContent;
