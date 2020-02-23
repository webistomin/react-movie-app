import React, { FunctionComponent, MutableRefObject, useEffect, useRef } from 'react';
import { cn } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';

import './AppErrorIndicator.sass';

interface IProps {
  className?: string;
}

const b = cn('ErrorIndicator');

const AppErrorIndicator: FunctionComponent<IProps> = ({ className }) => {
  const leftEye = useRef() as MutableRefObject<HTMLDivElement>;
  const rightEye = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    document.title = 'Something went wrong. 😠';
  }, []);

  const onMouseMoveHandler = (event: React.MouseEvent): void => {
    const rect = leftEye.current.getBoundingClientRect();
    const coords = {
      x: rect.left + document.body.scrollLeft + rect.width / 2,
      y: rect.top + document.body.scrollTop + rect.height / 2,
    };

    const rad = Math.atan2(event.pageX - coords.x, event.pageY - coords.y);
    const rot = rad * (180 / Math.PI) * -1 + 180;
    leftEye.current.style.transform = `rotate(${rot}deg)`;
    rightEye.current.style.transform = `rotate(${rot}deg)`;
  };

  return (
    <div className={classnames(b(), className)} onMouseMove={onMouseMoveHandler}>
      <h1 className={b('Code')}>
        <strong className={b('Number')}>5</strong>
        <div className={b('Eye')} ref={leftEye} />
        <div className={b('Eye')} ref={rightEye} />
      </h1>
      <h2 className={b('Title')}>Whoops!</h2>
      <h3 className={b('Subtitle')}>Something went wrong. Check console</h3>
    </div>
  );
};

export default AppErrorIndicator;
