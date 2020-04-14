/* eslint-disable @typescript-eslint/camelcase */
import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';
// import { go } from 'connected-react-router';

import { Link } from 'react-router-dom';
import AppRating from 'components/ui/AppRating';
import AppLazyImage from 'components/ui/AppLazyImage';

import { minutesToHoursAndMinutes } from 'utils/minutesToHoursAndMinutes';
import { buildImagePath } from 'utils/buildImagePath';
import { BackdropSizes } from 'common/types/images-sizes';
import { FetchStatus } from 'common/types/fetch-status';
import defaultBackdrop from 'src/assets/img/default-backdrop.jpg';

import './AppIntro.sass';
// import AppIcon from 'components/ui/AppIcon';
// import { useDispatch } from 'react-redux';

const b = cn('Intro');

interface IProps {
  id: number | undefined;
  original_title: string | undefined;
  vote_average: number | undefined;
  release_date: Date | undefined;
  runtime: number | undefined;
  overview: string | undefined;
  backdrop_path: string | undefined;
  fetchStatus: FetchStatus | null;
  isBreadcrumbVisible: boolean;
}

const AppIntro: FunctionComponent<IProps> = ({
  id,
  original_title,
  vote_average,
  release_date,
  runtime,
  overview,
  backdrop_path,
  fetchStatus,
  isBreadcrumbVisible,
}) => {
  // const dispatch = useDispatch();

  return (
    <div className={b()}>
      {/*{isBreadcrumbVisible && (*/}
      {/*  <button*/}
      {/*    aria-label='Go to previous page'*/}
      {/*    type='button'*/}
      {/*    className={b('Breadcrumb')}*/}
      {/*    onClick={() => {*/}
      {/*      dispatch(go(-1));*/}
      {/*    }}>*/}
      {/*    <AppIcon icon='icon-arrow-thin' width={24} height={24} />*/}
      {/*    Back to previous page*/}
      {/*  </button>*/}
      {/*)}*/}

      <div className={b('Inner')}>
        {id && original_title && (
          <h1 className={classnames(b('Title'), 'Title')}>
            <Link to={`/movie/${id}`}>{original_title}</Link>
          </h1>
        )}

        <div className={b('Info')}>
          {vote_average ? <AppRating rating={vote_average} className={b('Rating')} /> : null}

          <div className={b('MetaInfo')}>
            {release_date ? (
              <span className={classnames(b('Year'), b('Meta'))}>{new Date(release_date).getUTCFullYear()}</span>
            ) : null}
            {runtime ? (
              <time className={classnames(b('Duration'), b('Meta'))}>{minutesToHoursAndMinutes(runtime)}</time>
            ) : null}
          </div>
        </div>

        {overview ? <p className={b('Desc')}>{overview}</p> : null}
      </div>

      {fetchStatus === FetchStatus.SUCCESS && (
        <figure className={b('Figure', { default: !backdrop_path })}>
          <picture className={b('Pic')}>
            <AppLazyImage
              image={backdrop_path ? `${buildImagePath(backdrop_path, BackdropSizes.w1280)}` : defaultBackdrop}
              className={b('Img', { default: !backdrop_path })}
            />
          </picture>
        </figure>
      )}
    </div>
  );
};

export default AppIntro;
