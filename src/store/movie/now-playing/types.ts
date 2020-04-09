import { ISearch } from 'common/types/search';
import { IMovie } from 'common/types/movie';
import { FetchStatus } from 'common/types/fetch-status';
import { Action } from 'redux';

export interface INowPlayingMoviesState {
  nowPlayingMovies: ISearch<IMovie> | null;
  fetchStatus: FetchStatus | null;
  nowPlayingSearchPage: number;
}

export enum ActionTypes {
  FETCH_NOW_PLAYING_MOVIES_START = '[movie] fetch now playing movies start',
  FETCH_NOW_PLAYING_MOVIES_SUCCESS = '[movie] fetch now playing movies success',
  FETCH_NOW_PLAYING_MOVIES_FAILURE = '[movie] fetch now playing movies failure',

  SET_NOW_PLAYING_SEARCH_PAGE = '[movie] set now playing search page',
  CLEAR_NOW_PLAYING_SEARCH_PAGE = '[movie] clear now playing search page',
}

export interface IFetchNowPlayingMoviesStartAction extends Action {
  type: ActionTypes.FETCH_NOW_PLAYING_MOVIES_START;
}

export interface IFetchNowPlayingMoviesSuccessAction extends Action {
  type: ActionTypes.FETCH_NOW_PLAYING_MOVIES_SUCCESS;
  payload: {
    movies: ISearch<IMovie>;
    shouldConcat?: boolean;
  };
}

export interface IFetchNowPlayingMoviesFailureAction extends Action {
  type: ActionTypes.FETCH_NOW_PLAYING_MOVIES_FAILURE;
}

export interface IClearNowPlayingSearchPage extends Action {
  type: ActionTypes.CLEAR_NOW_PLAYING_SEARCH_PAGE;
}

export interface ISetNowPlayingSearchPage extends Action {
  type: ActionTypes.SET_NOW_PLAYING_SEARCH_PAGE;
  payload: INowPlayingMoviesState['nowPlayingSearchPage'];
}

export type IFetchNowPlayingMoviesActions =
  | IFetchNowPlayingMoviesStartAction
  | IFetchNowPlayingMoviesSuccessAction
  | IFetchNowPlayingMoviesFailureAction
  | IClearNowPlayingSearchPage
  | ISetNowPlayingSearchPage;
