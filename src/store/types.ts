import { ActionType } from 'typesafe-actions';

import { initializeApp } from 'store/actions';

export enum FetchStatus {
  PENDING = 'pending',
  SUCCESS = 'success',
  FAILURE = 'failure',
}

export enum ActionTypes {
  APP_INITIALIZE = '[app] initialization',
}

export type InitializeApplicationAction = ActionType<typeof initializeApp>;
