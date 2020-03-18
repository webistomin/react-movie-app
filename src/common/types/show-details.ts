import { IPerson } from 'common/types/person';
import { IGenre } from 'common/types/genre';
import { IShow } from 'common/types/show';
import { INetwork } from 'common/types/network';
import { ICompany } from 'common/types/company';
import { ISeason } from 'common/types/season';

export interface IShowDetails extends IShow {
  created_by: Array<IPerson>;
  episode_run_time: Array<number>;
  genres: Array<IGenre>;
  homepage: string;
  in_production: boolean;
  languages: Array<string>;
  last_air_date: Date;
  networks: Array<INetwork>;
  number_of_episodes: number;
  number_of_seasons: number;
  production_companies: Array<ICompany>;
  seasons: Array<ISeason>;
  status: string;
  type: string;
}
