import { ImageSizes } from 'common/image/types';

export const buildImagePath = (url: string | null, width: ImageSizes) => {
  return `${process.env.REACT_APP_API_IMAGE_URL}${width}${url}`;
};
