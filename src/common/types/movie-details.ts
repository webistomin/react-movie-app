import { IMovie } from 'common/types/movie';
import { ICompany } from 'common/types/company';
import { ICountry } from 'common/types/country';
import { IGenre } from 'common/types/genre';

export interface IMovieDetails extends IMovie {
  budget: number;
  genres: IGenre[];
  production_companies: ICompany[];
  production_countries: ICountry[];
  revenue: number;
  status: string;
  tagline: string;
}
