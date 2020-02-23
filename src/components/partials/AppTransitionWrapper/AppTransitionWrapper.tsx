import React, { FunctionComponent, ReactNode } from 'react';
import { cn } from '@bem-react/classname';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { withRouter } from 'react-router-dom';
import * as H from 'history';

interface IProps {
  location: H.Location;
  children?: string | ReactNode;
}

const b = cn('Layout');

const AppTransitionWrapper: FunctionComponent<IProps> = ({ location, children }) => {
  const onEnterHandler = (): void => {
    window.scrollTo(0, 0);
  };

  return (
    <TransitionGroup className={b()}>
      <CSSTransition
        key={location.key}
        timeout={{ enter: 400, exit: 400 }}
        classNames={'fade'}
        onEnter={onEnterHandler}>
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default withRouter(AppTransitionWrapper);
