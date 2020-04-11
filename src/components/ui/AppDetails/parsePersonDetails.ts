import { IDetails } from 'components/ui/AppDetails/AppDetails';
import { IPersonDetails } from 'common/types/person-details';
import { getGender } from 'utils/getGender';

export const parsePersonDetails = (person: IPersonDetails | null): IDetails[] => {
  return [
    {
      detailName: 'Also knows as',
      detailValue: person?.also_known_as.join(', '),
    },
    {
      detailName: 'Birthday',
      detailValue: person?.birthday && new Date(person.birthday).toDateString(),
    },
    {
      detailName: 'Place of birth',
      detailValue: person?.place_of_birth,
    },
    {
      detailName: 'Deathday',
      detailValue: person?.deathday && new Date(person.deathday).toDateString(),
    },
    {
      detailName: 'Gender',
      detailValue: person?.gender && getGender(person.gender),
    },
    {
      detailName: 'Biography',
      detailValue: person?.biography,
    },
  ];
};
