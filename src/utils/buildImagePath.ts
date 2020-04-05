import { ImageSizes } from 'common/types/images-sizes';

export const buildImagePath = (url: string | null | undefined, width: ImageSizes) => {
  if (url) {
    return `${process.env.REACT_APP_API_IMAGE_URL}${width}${url}`;
  } else {
    return '';
  }
};
