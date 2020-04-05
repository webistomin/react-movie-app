import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';

import AppLazyImage from 'components/ui/AppLazyImage';
import { buildImagePath } from 'utils/buildImagePath';
import { BackdropSizes } from 'common/types/images-sizes';
import { IImage } from 'common/types/images';

import './AppCard.sass';

const b = cn('Card');

interface IProps {
  file_path: IImage['file_path'];
}

// eslint-disable-next-line @typescript-eslint/camelcase
const AppImageCard: FunctionComponent<IProps> = ({ file_path }) => {
  return (
    <article className={b()}>
      <figure className={b('Figure')}>
        <picture className={b('Picture')}>
          <AppLazyImage
            image={buildImagePath(file_path, BackdropSizes.w780)}
            className={b('Img')}
            width={780}
            height={439}
          />
        </picture>
      </figure>
    </article>
  );
};

export default AppImageCard;
