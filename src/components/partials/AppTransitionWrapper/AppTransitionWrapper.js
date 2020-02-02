import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { withRouter } from 'react-router-dom';

const AppTransitionWrapper = (props) => {
  const onEnterHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <TransitionGroup className='layout'>
      <CSSTransition
        key={props.location.key}
        timeout={{ enter: 400, exit: 400 }}
        classNames={'fade'}
        onEnter={onEnterHandler()}>
        {props.children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default withRouter(AppTransitionWrapper);
