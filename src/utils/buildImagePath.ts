import { ImageSizes } from 'common/types/images-sizes';
import TMDbService from '~/services/tmdbService';

// const cloudImageUrl = 'https://aliaqhhvjo.cloudimg.io/v7/';

const API = new TMDbService();

export const buildImagePath = (url: string | null | undefined, width: ImageSizes): string => {
  if (url) {
    return `${API.API_IMAGE_PATH}${width}${url}`;
  } else {
    return '';
  }
};
