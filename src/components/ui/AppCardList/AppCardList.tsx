import React, { FunctionComponent, useState } from 'react';
import { cn } from '@bem-react/classname';

import AppCard, { AppImageCard, AppVideoCard } from 'components/ui/AppCard';
import { IVideo } from 'common/types/videos';
import { IImage } from 'common/types/images';
import { IMovie } from 'common/types/movie';
import { IFavoriteMovie } from 'store/favorites/types';

import './AppCardList.sass';
import AppLightbox from 'components/ui/AppLightbox/AppLightbox';
import AppVideoModal from 'components/ui/AppVideoModal/AppVideoModal';

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

interface IMovieList extends IProps {
  movies: (IMovie | IFavoriteMovie)[];
  videos?: never;
  images?: never;
}

interface IProps {
  title: string;
}

type ConditionalListProps = IVideoList | IImageList | IMovieList;

const AppCardList: FunctionComponent<ConditionalListProps> = ({ title, videos, images, movies }) => {
  const [isLightboxVisible, setLightboxVisibility] = useState(false);
  const [isVideoModalVisible, setVideoModalVisibility] = useState(false);

  const [currentPhotoIndex, setIndex] = useState(0);
  const [currentVideoKey, setVideoKey] = useState('');

  const handleImageCardClick = (path: IImage['file_path']) => {
    setLightboxVisibility(true);
    const newIndex = images?.findIndex((image) => image.file_path === path) || 0;
    setIndex(newIndex);
  };

  const handleVideoCardClick = (videoId: string) => {
    setVideoModalVisibility(true);
    setVideoKey(videoId);
  };

  return (
    <div className={b()}>
      <div className={b('Heading')}>
        <h2 className={b('Title')}>{title}</h2>
        <strong className={b('Counter')}>{videos?.length || images?.length || movies?.length} items</strong>
      </div>
      <div className={b('Content')}>
        <ul className={b('List', { '3items': Boolean(videos), '6items': Boolean(images) || Boolean(movies) })}>
          {videos &&
            videos.map((video) => {
              return (
                <li className={b('Item')} key={video.id}>
                  <AppVideoCard
                    id={video.id}
                    name={video.name}
                    type={video.type}
                    ytKey={video.key}
                    onClick={() => handleVideoCardClick(video.key)}
                  />
                </li>
              );
            })}
          {videos && isVideoModalVisible && (
            <AppVideoModal
              videoId={currentVideoKey}
              isOpen={isVideoModalVisible}
              onClose={() => setVideoModalVisibility(false)}
            />
          )}

          {images &&
            images.map((image) => {
              return (
                <li className={b('Item')} key={image.file_path}>
                  <AppImageCard file_path={image.file_path} onClick={(path) => handleImageCardClick(path)} />
                </li>
              );
            })}
          {images && isLightboxVisible && (
            <AppLightbox images={images} startIndex={currentPhotoIndex} onClose={() => setLightboxVisibility(false)} />
          )}

          {movies &&
            movies.map((movie) => {
              return (
                <li className={b('Item')} key={movie.id}>
                  <AppCard
                    id={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                    vote_average={movie.vote_average}
                  />
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default AppCardList;
