import React from 'react';
import classnames from 'classnames';
import './AppButton.sass';

const AppButton = ({ className, children, color }) => {
  return (
    <button type='button' className={classnames('btn', className, `btn_color_${color}`)}>
      {children}
    </button>
  );
};

AppButton.defaultProps = {
  color: 'grey',
};

export default AppButton;
