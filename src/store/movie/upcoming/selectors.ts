import { ApplicationState } from 'store/store';

export function getUpcomingMovies(state: ApplicationState) {
  return state.movies.upcomingMovies.upcomingMovies;
}
