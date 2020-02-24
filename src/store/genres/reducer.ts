import { ActionTypes, IFetchGenresActions, IGenres } from 'store/genres/types';
import { FetchStatus } from 'store/types';

const initialState: IGenres = {
  genres: null,
  fetchStatus: null,
};

function reducer(state: IGenres = initialState, action: IFetchGenresActions): IGenres {
  switch (action.type) {
    case ActionTypes.FETCH_MOVIE_GENRES_START:
      return {
        ...state,
        fetchStatus: FetchStatus.PENDING,
      };
    case ActionTypes.FETCH_MOVIE_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload,
        fetchStatus: FetchStatus.SUCCESS,
      };
    case ActionTypes.FETCH_MOVIE_GENRES_FAILURE:
      return {
        ...state,
        fetchStatus: FetchStatus.FAILURE,
      };
    default:
      return state;
  }
}

export default reducer;
