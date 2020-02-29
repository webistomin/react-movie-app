import { ActionType } from 'typesafe-actions';

import { initializeApp } from 'store/actions';

export enum FetchStatus {
  PENDING = 'pending',
  SUCCESS = 'success',
  FAILURE = 'failure',
}

export type InitializeApplicationAction = ActionType<typeof initializeApp>;
