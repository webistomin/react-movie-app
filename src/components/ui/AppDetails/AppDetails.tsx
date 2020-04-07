import React, { FunctionComponent, ReactNode } from 'react';
import { cn } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';

import { ISocials } from 'common/types/socials';
import AppLazyImage from 'components/ui/AppLazyImage/AppLazyImage';
import { buildImagePath } from 'utils/buildImagePath';
import { PosterSizes } from 'common/types/images-sizes';

import './AppDetails.sass';

const b = cn('Details');

export interface IDetails {
  detailName: string;
  detailValue: any;
}

interface IProps {
  title: string;
  poster?: string;
  overview?: string;
  socials?: ISocials[];
  details?: IDetails[];
}

export const AppDetails: FunctionComponent<IProps> = ({ poster, title, overview, details }) => {
  return (
    <div className={classnames(b())}>
      <div className={classnames(b('Column', { left: true }))}>
        <figure className={classnames(b('Figure'))}>
          <picture className={classnames(b('Picture'))}>
            <AppLazyImage
              className={b('Poster')}
              image={buildImagePath(poster, PosterSizes.w342)}
              width={342}
              height={513}
            />
          </picture>
        </figure>
      </div>
      <div className={classnames(b('Column', { right: true }))}>
        <h2 className={classnames(b('Title'))}>{title}</h2>
        <p className={classnames(b('Overview'))}>{overview}</p>
        <table className={classnames(b('Table'))}>
          <tbody>
            {details &&
              details.map((detail) => {
                return (
                  <tr className={classnames(b('TableRow'))} key={detail.detailName}>
                    <td className={classnames(b('TableData'))}>{detail.detailName}</td>
                    <td className={classnames(b('TableData'))}>{detail.detailValue || 'Unknown'}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppDetails;
