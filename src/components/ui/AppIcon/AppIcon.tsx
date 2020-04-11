import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';

import './AppIcon.sass';

const b = cn('Icon');

interface IProps {
  icon: string;
  width: number;
  height: number;
  className?: string;
}

const AppIcon: FunctionComponent<IProps> = ({ icon, width, height, className }) => {
  return (
    <svg className={classnames(b({ name: icon.replace('icon-', '') }), className)} width={width} height={height}>
      <use xlinkHref={`#${icon}`} />
    </svg>
  );
};

export default AppIcon;
