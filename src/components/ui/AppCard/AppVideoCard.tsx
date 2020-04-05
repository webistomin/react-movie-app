import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';

import { Link } from 'react-router-dom';
import { buildImagePath } from 'utils/buildImagePath';
import { PosterSizes } from 'common/types/images';
import AppLazyImage from 'components/ui/AppLazyImage';

import './AppCard.sass';
import { IVideo } from 'common/types/videos';

const b = cn('Card');

interface IProps {
  id: IVideo['id'];
  name: IVideo['name'];
  type: IVideo['type'];
  ytKey: IVideo['key'];
}

// eslint-disable-next-line @typescript-eslint/camelcase
const AppVideoCard: FunctionComponent<IProps> = ({ id, name, type, ytKey }) => {
  return (
    <article className={b()}>
      <figure className={b('Figure')}>
        <picture className={b('Picture')}>
          <AppLazyImage
            image={`https://img.youtube.com/vi/${ytKey}/sddefault.jpg`}
            className={b('Img')}
            width={640}
            height={480}
          />
        </picture>
      </figure>
      <h2 className={b('PersonName')}>{name}</h2>
      <strong className={b('Character')}>{type}</strong>
    </article>
  );
};

export default AppVideoCard;
