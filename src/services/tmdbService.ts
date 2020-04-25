import { ISearch } from 'common/types/search';
import { IMovie } from 'common/types/movie';
import { IGenre } from 'common/types/genre';
import { IMovieCredits } from 'common/types/movie-credits';
import { IMovieDetails } from 'common/types/movie-details';
import { IVideos } from 'common/types/videos';
import { IImages } from 'common/types/images';
import { IPersonDetails } from 'common/types/person-details';

export default class TMDb {
  private readonly API_BASE = 'https://api.themoviedb.org/3/';
  private readonly TMDB_API_KEY = '52217232f795bbefbb1b7c951aae98ad';
  private readonly API_LANGUAGE = 'en-US';
  public readonly API_IMAGE_PATH = 'https://image.tmdb.org/t/p/';

  private fetchJSON = async (url: string) => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status} error`);
    }

    return response.json();
  };

  public getGenres = async (): Promise<IGenre[]> => {
    return this.fetchJSON(
      `${this.API_BASE}genre/movie/list?api_key=${this.TMDB_API_KEY}&language=${this.API_LANGUAGE}`
    );
  };

  public getContentBySearchQuery = async (query: string, page = 1) => {
    return this.fetchJSON(
      `${this.API_BASE}search/movie?api_key=${this.TMDB_API_KEY}&language=${this.API_LANGUAGE}&query=${query}&page=${page}&include_adult=false`
    );
  };

  public getMovieDetails = async (id: number): Promise<IMovieDetails> => {
    return this.fetchJSON(
      `${this.API_BASE}movie/${id}?api_key=${this.TMDB_API_KEY}&language=${this.API_LANGUAGE}`
    );
  };

  public getMovieImages = async (id: number): Promise<IImages> => {
    return this.fetchJSON(`${this.API_BASE}movie/${id}/images?api_key=${this.TMDB_API_KEY}`);
  };

  public getMovieRecommendations = async (id: number): Promise<ISearch<IMovie>> => {
    return this.fetchJSON(
      `${this.API_BASE}movie/${id}/recommendations?api_key=${this.TMDB_API_KEY}&language=${this.API_LANGUAGE}`
    );
  };

  public getMovieSimilar = async (id: number, page = 1): Promise<ISearch<IMovie>> => {
    return this.fetchJSON(
      `${this.API_BASE}movie/${id}/similar?api_key=${this.TMDB_API_KEY}&language=${this.API_LANGUAGE}&page=${page}`
    );
  };

  public getLatestMovie = async (): Promise<IMovie> => {
    return this.fetchJSON(
      `${this.API_BASE}movie/latest?api_key=${this.TMDB_API_KEY}&language=${this.API_LANGUAGE}&include_adult=false`
    );
  };

  public getNowPlayingMovies = async (page = 1): Promise<ISearch<IMovie>> => {
    return this.fetchJSON(
      `${this.API_BASE}movie/now_playing?api_key=${this.TMDB_API_KEY}&language=${this.API_LANGUAGE}&page=${page}`
    );
  };

  public getPopularMovies = async (page = 1): Promise<ISearch<IMovie>> => {
    return this.fetchJSON(
      `${this.API_BASE}movie/popular?api_key=${this.TMDB_API_KEY}&language=${this.API_LANGUAGE}&page=${page}`
    );
  };

  public getTopRatedMovies = async (page = 1): Promise<ISearch<IMovie>> => {
    return this.fetchJSON(
      `${this.API_BASE}movie/top_rated?api_key=${this.TMDB_API_KEY}&language=${this.API_LANGUAGE}&page=${page}`
    );
  };

  public getUpcomingMovies = async (page = 1): Promise<ISearch<IMovie>> => {
    return this.fetchJSON(
      `${this.API_BASE}movie/upcoming?api_key=${this.TMDB_API_KEY}&language=${this.API_LANGUAGE}&page=${page}`
    );
  };

  public getMovieCredits = async (id: number): Promise<IMovieCredits> => {
    return this.fetchJSON(
      `${this.API_BASE}movie/${id}/credits?api_key=${this.TMDB_API_KEY}&language=${this.API_LANGUAGE}`
    );
  };

  public getMovieVideos = async (id: number): Promise<IVideos> => {
    return this.fetchJSON(
      `${this.API_BASE}movie/${id}/videos?api_key=${this.TMDB_API_KEY}&language=${this.API_LANGUAGE}`
    );
  };

  public getPersonDetails = async (id: number): Promise<IPersonDetails> => {
    return this.fetchJSON(
      `${this.API_BASE}person/${id}?api_key=${this.TMDB_API_KEY}&language=${this.API_LANGUAGE}&append_to_response=movie_credits`
    );
  };
}
