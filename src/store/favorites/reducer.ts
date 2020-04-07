import { ActionTypes, IFavoriteMovieActions, IFavoritesState } from 'store/favorites/types';

const initialState: IFavoritesState = {
  favoriteMovies: [],
};

function reducer(state: IFavoritesState = initialState, action: IFavoriteMovieActions): IFavoritesState {
  switch (action.type) {
    case ActionTypes.SAVE_FAVORITE_MOVIE:
      return {
        ...state,
        favoriteMovies: [...state.favoriteMovies, action.payload],
      };
    case ActionTypes.DELETE_FAVORITE_MOVIE:
      const newFavoriteMovies = [...state.favoriteMovies];
      const movieIndex = newFavoriteMovies.findIndex((movie) => movie.id === action.payload);
      newFavoriteMovies.splice(movieIndex, 1);

      return {
        ...state,
        favoriteMovies: newFavoriteMovies,
      };
    default:
      return state;
  }
}

export default reducer;
