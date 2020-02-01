import React from 'react';
import './AppButton.sass';
import classnames from 'classnames';

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
