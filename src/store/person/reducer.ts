import { ActionTypes, IFetchPersonDetailsActions, IPersonDetailsState } from 'store/person/types';
import { FetchStatus } from 'common/types/fetch-status';

const initialState: IPersonDetailsState = {
  personDetails: null,
  fetchStatus: null,
};

function reducer(state: IPersonDetailsState = initialState, action: IFetchPersonDetailsActions): IPersonDetailsState {
  switch (action.type) {
    case ActionTypes.FETCH_PERSON_DETAILS_START:
      return {
        ...state,
        fetchStatus: FetchStatus.PENDING,
      };
    case ActionTypes.FETCH_PERSON_DETAILS_SUCCESS:
      return {
        ...state,
        personDetails: action.payload,
        fetchStatus: FetchStatus.SUCCESS,
      };
    case ActionTypes.FETCH_PERSON_DETAILS_FAILURE:
      return {
        ...state,
        fetchStatus: FetchStatus.FAILURE,
      };
    case ActionTypes.CLEAR_PERSON_DETAILS:
      return {
        ...state,
        personDetails: null,
        fetchStatus: null,
      };
    default:
      return state;
  }
}

export default reducer;
