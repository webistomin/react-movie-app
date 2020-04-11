import { IMovie } from 'common/types/movie';
import { IShow } from 'common/types/show';

export interface IPerson {
  adult: boolean;
  id: number;
  known_for?: Array<IMovie | IShow>;
  name: string;
  popularity: number;
  profile_path: string;
}
