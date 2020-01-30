import React from 'react';
import classnames from 'classnames';
import './AppIcon.sass';

const AppIcon = ({ icon, width, height, className }) => {
  return (
    <svg className={classnames('icon', className)} width={width} height={height}>
      <use xlinkHref={`#${icon}`} />
    </svg>
  );
};

export default AppIcon;
