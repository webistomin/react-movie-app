import { ActionTypes } from 'store/person/types';
import { IPersonDetails } from 'common/types/person-details';

export function fetchPersonDetailsStart(payload: number) {
  return {
    type: ActionTypes.FETCH_PERSON_DETAILS_START,
    payload,
  };
}

export function fetchPersonDetailsSuccess(payload: IPersonDetails) {
  return {
    type: ActionTypes.FETCH_PERSON_DETAILS_SUCCESS,
    payload,
  };
}

export function fetchPersonDetailsFailure() {
  return {
    type: ActionTypes.FETCH_PERSON_DETAILS_FAILURE,
  };
}

export function clearPersonDetails() {
  return {
    type: ActionTypes.CLEAR_PERSON_DETAILS,
  };
}
