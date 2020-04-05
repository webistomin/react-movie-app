import React, { FunctionComponent, ReactNode } from 'react';
import { cn } from '@bem-react/classname';

import './AppContent.sass';
import { classnames } from '@bem-react/classnames';

export const b = cn('PageContent');

interface IProps {
  className?: string;
  children?: ReactNode;
}

const AppContent: FunctionComponent<IProps> = ({ className, children }) => {
  return <main className={classnames(b(), className)}>{children}</main>;
};

export default AppContent;
