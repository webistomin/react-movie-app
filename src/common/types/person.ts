import { IMovie } from 'common/types/movie';
import { IShow } from 'common/types/show';

export interface IPerson {
  id: number;
  name: string;
  profile_path: string;
  adult: boolean;
  popularity: number;
  known_for: Array<IMovie | IShow>;
}
