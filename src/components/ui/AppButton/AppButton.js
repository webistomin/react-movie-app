import React from 'react';
import './AppButton.sass';
import classnames from 'classnames';

const AppButton = ({ className, children }) => {
  return (
    <button type='button' className={classnames('btn', className)}>
      {children}
    </button>
  );
};

export default AppButton;
