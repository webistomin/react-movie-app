import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';

import { Link } from 'react-router-dom';
import AppRating from 'components/ui/AppRating';
import AppButton from 'components/ui/AppButton';
import AppIcon from 'components/ui/AppIcon';
import AppLazyImage from 'components/ui/AppLazyImage';

import { useSelector } from 'react-redux';
import { getLatestMovie } from 'store/movie/selectors';
import { minutesToHoursAndMinutes } from 'utils/minutesToHoursAndMinutes';
import { buildImagePath } from 'utils/buildImagePath';
import { BackdropSizes } from 'common/image/types';

import './AppIntro.sass';

const b = cn('Intro');

const AppIntro: FunctionComponent = () => {
  const latestMovie = useSelector(getLatestMovie);

  return (
    <div className={b()}>
      <div className={b('Inner')}>
        {latestMovie?.id && latestMovie?.original_title && (
          <h1 className={classnames(b('Title'), 'Title')}>
            <Link to={`/movie/${latestMovie.id}`}>{latestMovie.original_title}</Link>
          </h1>
        )}

        <div className={b('Info')}>
          {latestMovie?.vote_average ? <AppRating className={b('Rating')} /> : null}

          <div className={b('MetaInfo')}>
            {latestMovie?.reviews ? <span className={classnames(b('Reviews'), b('Meta'))}>1,613 Reviews</span> : null}
            {latestMovie?.release_date ? (
              <span className={classnames(b('Year'), b('Meta'))}>
                {new Date(latestMovie.release_date).getUTCFullYear()}
              </span>
            ) : null}
            {latestMovie?.runtime ? (
              <time className={classnames(b('Duration'), b('Meta'))}>
                {minutesToHoursAndMinutes(latestMovie.runtime)}
              </time>
            ) : null}
          </div>
        </div>

        {latestMovie?.overview ? <p className={b('Desc')}>{latestMovie.overview}</p> : null}

        {latestMovie?.video ? (
          <AppButton className={b('Btn')}>
            <AppIcon className='Btn-Icon' icon='icon-play' width={14} height={14} />
            Watch trailer
          </AppButton>
        ) : null}
      </div>

      {latestMovie?.backdrop_path ? (
        <figure className={b('Figure')}>
          <picture className={b('Pic')}>
            <AppLazyImage
              image={`${buildImagePath(latestMovie.backdrop_path, BackdropSizes.w1280)}`}
              className={b('Img')}
            />
          </picture>
        </figure>
      ) : null}
    </div>
  );
};

export default AppIntro;
