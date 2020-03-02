import { ActionTypes, IFetchGenresActions, IGenresState } from 'store/genres/types';
import { FetchStatus } from 'common/types/fetch-status';

const initialState: IGenresState = {
  genres: null,
  fetchStatus: null,
};

function reducer(state: IGenresState = initialState, action: IFetchGenresActions): IGenresState {
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
