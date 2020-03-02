export interface IShow {
  id: number;
  name: string;
  original_name: string;
  poster_path: string;
  popularity: number;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  origin_country: Array<string>;
  genre_ids: Array<number>;
  original_language: string;
  vote_count: number;
  first_air_date: Date;
}
