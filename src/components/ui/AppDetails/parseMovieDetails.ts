import { IDetails } from 'components/ui/AppDetails/AppDetails';
import { IMovieDetails } from 'common/types/movie-details';
import { getLanguageFullname } from 'utils/getLanguageFullname';
import { getNumberWithCommas } from 'utils/getNumberWithCommas';
import { minutesToHoursAndMinutes } from 'utils/minutesToHoursAndMinutes';

export const parseMovieDetails = (movie: IMovieDetails): IDetails[] => {
  return [
    {
      detailName: 'Released',
      detailValue: new Date(movie.release_date).toDateString(),
    },
    {
      detailName: 'Runtime',
      detailValue: minutesToHoursAndMinutes(movie.runtime),
    },
    {
      detailName: 'Budget',
      detailValue: `$${getNumberWithCommas(movie.budget)}`,
    },
    {
      detailName: 'Revenue',
      detailValue: `$${getNumberWithCommas(movie.revenue)}`,
    },
    {
      detailName: 'Genres',
      detailValue: movie.genres.map((genre) => genre.name).join(', '),
    },
    {
      detailName: 'Status',
      detailValue: movie.status,
    },
    {
      detailName: 'Language',
      detailValue: getLanguageFullname(movie.original_language),
    },
    {
      detailName: 'Production',
      detailValue: movie.production_companies.map((company) => company.name).join(', '),
    },
  ];
};
