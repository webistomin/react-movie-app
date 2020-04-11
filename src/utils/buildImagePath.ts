import { ImageSizes } from 'common/types/images-sizes';

// const cloudImageUrl = 'https://aliaqhhvjo.cloudimg.io/v7/';

export const buildImagePath = (url: string | null | undefined, width: ImageSizes): string => {
  if (url) {
    return `${process.env.REACT_APP_API_IMAGE_URL}${width}${url}`;
  } else {
    return '';
  }
};
