import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';

import { Link } from 'react-router-dom';
import AppRating from 'components/ui/AppRating';
import AppButton from 'components/ui/AppButton';
import AppIcon from 'components/ui/AppIcon';
import AppLazyImage from 'components/ui/AppLazyImage';

import './AppIntro.sass';

const b = cn('Intro');

const AppIntro: FunctionComponent = () => {
  return (
    <div className={b()}>
      <div className={b('Inner')}>
        <h1 className={classnames(b('Title'), 'Title')}>
          <Link to='/movie'>1917</Link>
        </h1>
        <div className={b('Info')}>
          <AppRating className={b('Rating')} />
          <div className={b('MetaInfo')}>
            <span className={classnames(b('Reviews'), b('Meta'))}>1,613 Reviews</span>
            <span className={classnames(b('Year'), b('Meta'))}>2019</span>
            <time className={classnames(b('Duration'), b('Meta'))}>1h 59min</time>
          </div>
        </div>
        <p className={b('Desc')}>
          At the height of the First World War, two young British soldiers, Schofield and Blake are given a seemingly
          impossible mission. In a race against time, they must cross enemy territory and deliver...
        </p>
        <AppButton className={b('Btn')}>
          <AppIcon className='Btn-Icon' icon='icon-play' width={14} height={14} />
          Watch trailer
        </AppButton>
      </div>
      <figure className={b('Figure')}>
        <picture className={b('Pic')}>
          <AppLazyImage className={b('Img')} />
        </picture>
      </figure>
    </div>
  );
};

export default AppIntro;
