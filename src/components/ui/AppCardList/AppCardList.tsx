import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';

import { AppImageCard, AppVideoCard } from 'components/ui/AppCard';
import { IVideo } from 'common/types/videos';
import { IImage } from 'common/types/images';

import './AppCardList.sass';

const b = cn('CardList');

interface IVideoList extends IProps {
  videos: IVideo[];
  images?: never;
  movies?: never;
}

interface IImageList extends IProps {
  images: IImage[];
  videos?: never;
  movies?: never;
}

interface IProps {
  title: string;
}

type ConditionalListProps = IVideoList | IImageList;

const AppCardList: FunctionComponent<ConditionalListProps> = ({ title, videos, images }) => {
  return (
    <div className={b()}>
      <div className={b('Heading')}>
        <h2 className={b('Title')}>{title}</h2>
        <strong className={b('Counter')}>{videos?.length || images?.length} items</strong>
      </div>
      <div className={b('Content')}>
        <ul className={b('List', { '3items': Boolean(videos), '6items': Boolean(images) })}>
          {videos &&
            videos.map((video) => {
              return (
                <li className={b('Item')} key={video.id}>
                  <AppVideoCard id={video.id} name={video.name} type={video.type} ytKey={video.key} />
                </li>
              );
            })}
          {images &&
            images.map((image) => {
              return (
                <li className={b('Item')} key={image.file_path}>
                  <AppImageCard file_path={image.file_path} />
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default AppCardList;
