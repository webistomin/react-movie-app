import { IGenres } from 'store/genres/types';

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Array<IGenres>;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: Array<IProductionsCompanies>;
  production_countries: Array<IProductionCountries>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [
    {
      iso_639_1: 'de';
      name: 'Deutsch';
    }
  ];
  status: 'Released';
  tagline: '';
  title: 'Venusberg';
  video: false;
  vote_average: 10;
  vote_count: 1;
}

export interface ISimilarMovie {
  adult: false;
  backdrop_path: '/coLGEhak0KhPpMYABmZdDnZbnSv.jpg';
  genre_ids: [53, 27, 9648];
  id: 39874;
  original_language: 'en';
  original_title: 'My Bloody Valentine';
  overview: "Twenty years ago in the sleepy mining town of Valentine Bluffs, a fatal mining disaster occurred on Valentine's Day while some of the crew was decorating for a party. The sole survivor of the accident killed the remaining crewmembers and warned the town not to celebrate Valentine's Day again. When a group of teenagers decides to defy that order, a murderous maniac in mining gear begins dispatching townsfolk in bloody and creative ways.";
  poster_path: '/kl3mewFceFtYIavvGts2atzB0e0.jpg';
  release_date: '1981-02-11';
  title: 'My Bloody Valentine';
  video: false;
  vote_average: 6.3;
  vote_count: 168;
  popularity: 7.724;
}

export interface IProductionsCompanies {
  id: number;
  logo_path: string | null;
  name: string | null;
  origin_country: string | null;
}

export interface IProductionCountries {
  iso_3166_1: string;
  name: string;
}
