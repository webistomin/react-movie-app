import React, { FunctionComponent, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { IImage } from 'common/types/images';
import { buildImagePath } from 'utils/buildImagePath';
import { BackdropSizes } from 'common/types/images-sizes';

export interface IProps {
  images: IImage[];
  startIndex: number;
  onClose: () => void;
}

export const AppLightbox: FunctionComponent<IProps> = ({ images, onClose, startIndex }) => {
  const [currentPhotoIndex, setIndex] = useState(startIndex);

  return (
    <Lightbox
      mainSrc={buildImagePath(images[currentPhotoIndex].file_path, BackdropSizes.w1280)}
      nextSrc={buildImagePath(images[(currentPhotoIndex + 1) % images.length].file_path, BackdropSizes.w1280)}
      prevSrc={buildImagePath(
        images[(currentPhotoIndex + images.length - 1) % images.length].file_path,
        BackdropSizes.w1280
      )}
      onCloseRequest={() => onClose()}
      onMovePrevRequest={() => setIndex((currentPhotoIndex + images.length - 1) % images.length)}
      onMoveNextRequest={() => setIndex((currentPhotoIndex + 1) % images.length)}
    />
  );
};

export default AppLightbox;
