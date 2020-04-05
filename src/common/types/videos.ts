export interface IVideos {
  id: number;
  results: IVideo[];
}

export interface IVideo {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
}
