import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';

import { Link } from 'react-router-dom';
import { buildImagePath } from 'utils/buildImagePath';
import { PosterSizes } from 'common/types/images-sizes';
import { ICast } from 'common/types/cast';
import AppLazyImage from 'components/ui/AppLazyImage';

import './AppCard.sass';

const b = cn('Card');

interface IProps {
  profile_path: ICast['profile_path'];
  id: ICast['id'];
  name: ICast['name'];
  character: ICast['character'];
}

// eslint-disable-next-line @typescript-eslint/camelcase
const AppPersonCard: FunctionComponent<IProps> = ({ profile_path, id, name, character }) => {
  return (
    <article className={b()}>
      <Link to={`/person/${id}`} className={b('Link')}>
        <figure className={b('Figure')}>
          <picture className={b('Picture')}>
            <AppLazyImage
              image={buildImagePath(profile_path, PosterSizes.w342)}
              className={b('Img')}
              width={240}
              height={360}
            />
          </picture>
        </figure>
        <h2 className={b('PersonName')}>{name}</h2>
        <strong className={b('Character')}>{character}</strong>
      </Link>
    </article>
  );
};

export default AppPersonCard;
