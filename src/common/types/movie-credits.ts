import { ICast } from 'common/types/cast';
import { ICrew } from 'common/types/crew';

export interface IMovieCredits {
  id?: number;
  cast: ICast[];
  crew: ICrew[];
}
