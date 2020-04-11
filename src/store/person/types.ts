import { Action } from 'redux';
import { FetchStatus } from 'common/types/fetch-status';
import { IPersonDetails } from 'common/types/person-details';

export interface IPersonDetailsState {
  personDetails: IPersonDetails | null;
  fetchStatus: FetchStatus | null;
}

export enum ActionTypes {
  FETCH_PERSON_DETAILS_START = '[person] fetch person details start',
  FETCH_PERSON_DETAILS_SUCCESS = '[person] fetch person details success',
  FETCH_PERSON_DETAILS_FAILURE = '[person] fetch person details failure',
  CLEAR_PERSON_DETAILS = '[person] clear person details',
}

export interface IFetchPersonDetailsStartAction extends Action {
  payload: number;
  type: ActionTypes.FETCH_PERSON_DETAILS_START;
}

export interface IFetchPersonDetailsSuccessAction extends Action {
  type: ActionTypes.FETCH_PERSON_DETAILS_SUCCESS;
  payload: IPersonDetails;
}

export interface IFetchPersonDetailsFailureAction extends Action {
  type: ActionTypes.FETCH_PERSON_DETAILS_FAILURE;
}

export interface IClearPersonDetailsAction extends Action {
  type: ActionTypes.CLEAR_PERSON_DETAILS;
}

export type IFetchPersonDetailsActions =
  | IFetchPersonDetailsStartAction
  | IFetchPersonDetailsSuccessAction
  | IFetchPersonDetailsFailureAction
  | IClearPersonDetailsAction;
