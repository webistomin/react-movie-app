export default class TMDb {
  private readonly API_BASE = process.env.REACT_APP_TMDB_URL || process.env.react_app_tmdb_url;
  private readonly IMG_BASE = process.env.REACT_APP_API_IMAGE_URL || process.env.react_app_api_image_url;
  private readonly TMDB_API_KEY = process.env.REACT_APP_API_KEY || process.env.react_app_api_key;
  private readonly API_LANGUAGE = process.env.REACT_APP_API_LANG || process.env.react_app_api_lang;

  private fetchJSON = async (url: string) => {
    const response = await fetch(url);
    return response.json();
  };

  public getGenres = async () => {
    return await this.fetchJSON(
      `${this.API_BASE}genre/movie/list?api_key=${this.TMDB_API_KEY}&language=${this.API_LANGUAGE}`
    );
  };

  public getContentBySearchQuery = async (query: string, page = 1) => {
    return await this.fetchJSON(
      `${this.API_BASE}search/multi?api_key=${this.TMDB_API_KEY}&language=${this.API_LANGUAGE}&query=${query}&page=${page}&include_adult=false`
    );
  };

  public getMovieDetails = async (id: number) => {
    return await this.fetchJSON(
      `${this.API_BASE}movie/${id}?api_key=${this.TMDB_API_KEY}&language=${this.API_LANGUAGE}`
    );
  };

  public getMovieImages = async (id: number) => {
    return await this.fetchJSON(
      `${this.API_BASE}movie/${id}/images?api_key=${this.TMDB_API_KEY}&language=${this.API_LANGUAGE}`
    );
  };

  public getMovieRecommendations = async (id: number) => {
    return await this.fetchJSON(
      `${this.API_BASE}movie/${id}/recommendations?api_key=${this.TMDB_API_KEY}&language=${this.API_LANGUAGE}`
    );
  };

  public getMovieSimilar = async (id: number, page: number) => {
    return await this.fetchJSON(
      `${this.API_BASE}movie/${id}/similar?api_key=${this.TMDB_API_KEY}&language=${this.API_LANGUAGE}&page=${page}`
    );
  };

  public getLatestMovie = async () => {
    return await this.fetchJSON(
      `${this.API_BASE}movie/latest?api_key=${this.TMDB_API_KEY}&language=${this.API_LANGUAGE}&include_adult=false`
    );
  };

  public getNowPlayingMovies = async (id: number, page: number) => {
    return await this.fetchJSON(
      `${this.API_BASE}movie/${id}/now_playing?api_key=${this.TMDB_API_KEY}&language=${this.API_LANGUAGE}&page=${page}`
    );
  };

  public getPopularMovies = async (page = 1) => {
    return await this.fetchJSON(
      `${this.API_BASE}movie/popular?api_key=${this.TMDB_API_KEY}&language=${this.API_LANGUAGE}&page=${page}`
    );
  };

  public getTopRatedMovies = async (id: number, page: number) => {
    return await this.fetchJSON(
      `${this.API_BASE}movie/${id}/top_rated?api_key=${this.TMDB_API_KEY}&language=${this.API_LANGUAGE}&page=${page}`
    );
  };

  public getUpcomingMovies = async (id: number, page: number) => {
    return await this.fetchJSON(
      `${this.API_BASE}movie/${id}/upcoming?api_key=${this.TMDB_API_KEY}&language=${this.API_LANGUAGE}&page=${page}`
    );
  };
}
