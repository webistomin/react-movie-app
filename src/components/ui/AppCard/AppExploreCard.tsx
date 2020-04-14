import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';

import './AppCard.sass';
import AppLink from 'components/ui/AppLink';

const b = cn('Card');

interface IProps {
  link: string;
}

// eslint-disable-next-line @typescript-eslint/camelcase
const AppExploreCard: FunctionComponent<IProps> = ({ link }) => {
  return (
    <article className={b()}>
      <AppLink to={link} className={b('Explore')} color='white'>
        <figure className={b('Figure')}>
          <figcaption className={b('Caption')}>Explore all</figcaption>
        </figure>
      </AppLink>
    </article>
  );
};

export default AppExploreCard;
