import React, { FunctionComponent, ReactNode } from 'react';
import { cn } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';

import './AppButton.sass';

interface IProps {
  className: string;
  children: string | ReactNode;
  color?: string;
}

const b = cn('Btn');

const AppButton: FunctionComponent<IProps> = ({ className, children, color }) => {
  return (
    <button type='button' className={classnames(b({ color }), className)}>
      {children}
    </button>
  );
};

AppButton.defaultProps = {
  color: 'grey',
};

export default AppButton;
