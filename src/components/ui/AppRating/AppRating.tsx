import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';

import AppIcon from 'components/ui/AppIcon';

import './AppRating.sass';

interface IProps {
  className?: string;
  rating: number | null;
}

const b = cn('Rating');

const AppRating: FunctionComponent<IProps> = ({ className, rating }) => {
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

  const getFilledStyle = () => {
    const MAX_WIDTH = 106;
    const style = {
      width: '',
    };

    if (rating) {
      const percent = ((rating / 2) * 100) / 5;
      style.width = `${(MAX_WIDTH / 100) * percent}%`;
    }

    return style;
  };

  return (
    <div className={classnames(b(), className)}>
      <div className={b('Box')}>
        <div className={b('All')}>{getBorderedStars()}</div>
        <div style={getFilledStyle()} className={b('Current')}>
          {getFilledStars()}
        </div>
      </div>
    </div>
  );
};

export default AppRating;
