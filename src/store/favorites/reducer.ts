import { ActionTypes, IFavoriteMovieActions, IFavoritesState } from 'store/favorites/types';

const initialState: IFavoritesState = {
  favoriteMoviesIds: [],
};

function reducer(state: IFavoritesState = initialState, action: IFavoriteMovieActions): IFavoritesState {
  switch (action.type) {
    case ActionTypes.SAVE_FAVORITE_MOVIE:
      return {
        ...state,
        favoriteMoviesIds: [...state.favoriteMoviesIds, action.payload],
      };
    case ActionTypes.DELETE_FAVORITE_MOVIE:
      const newFavoriteMoviesIds = [...state.favoriteMoviesIds];
      newFavoriteMoviesIds.splice(newFavoriteMoviesIds.indexOf(action.payload), 1);

      return {
        ...state,
        favoriteMoviesIds: newFavoriteMoviesIds,
      };
    default:
      return state;
  }
}

export default reducer;
