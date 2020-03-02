import { IPerson } from 'common/types/person';

export interface IPersonDetails extends IPerson {
  also_known_as: Array<string>;
  biography: string;
  birthday: Date;
  deathday: Date;
  gender: number;
  homepage: string;
  imdb_id: string;
  place_of_birth: string;
}
