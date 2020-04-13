import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';

import AppLazyImage from 'components/ui/AppLazyImage';
import AppIcon from 'components/ui/AppIcon';
import { buildImagePath } from 'utils/buildImagePath';
import { BackdropSizes } from 'common/types/images-sizes';
import { IImage } from 'common/types/images';

import './AppCard.sass';

const b = cn('Card');

interface IProps {
  file_path: IImage['file_path'];
  onClick: (path: IImage['file_path']) => void;
}

// eslint-disable-next-line @typescript-eslint/camelcase
const AppImageCard: FunctionComponent<IProps> = ({ file_path, onClick }) => {
  return (
    <article className={b()}>
      <button
        onClick={() => {
          onClick(file_path);
        }}
        className={b('LightboxBtn')}>
        <AppIcon icon={'icon-zoom'} width={48} height={48} />
      </button>
      <figure className={b('Figure')}>
        <picture className={b('Picture')}>
          <AppLazyImage
            image={buildImagePath(file_path, BackdropSizes.w780)}
            className={b('Img')}
            width={780}
            height={439}
            alt={'Some picture'}
          />
        </picture>
      </figure>
    </article>
  );
};

export default AppImageCard;
