import { ApplicationState } from 'store/store';

export function getNowPlayingMovies(state: ApplicationState) {
  return state.movies.nowPlatingMovies.nowPlayingMovies;
}
