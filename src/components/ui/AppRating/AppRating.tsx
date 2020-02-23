import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';

import AppIcon from 'components/ui/AppIcon';

import './AppRating.sass';

interface IProps {
  className?: string;
}

const b = cn('Rating');

const AppRating: FunctionComponent<IProps> = ({ className }) => {
  const getBorderedStars = () => {
    return Array(5)
      .fill(null)
      .map((item, index) => {
        return (
          <AppIcon key={index} className={b('Star', { bordered: true })} icon='icon-star' width={18} height={18} />
        );
      });
  };

  const getFilledStars = () => {
    return Array(5)
      .fill(null)
      .map((item, index) => {
        return (
          <AppIcon key={index} className={b('Star', { filled: true })} icon='icon-star-filled' width={18} height={18} />
        );
      });
  };

  return (
    <div className={classnames(b(), className)}>
      <div className={b('Box')}>
        <div className={b('All')}>{getBorderedStars()}</div>
        <div className={b('Current')}>{getFilledStars()}</div>
      </div>
    </div>
  );
};

export default AppRating;
