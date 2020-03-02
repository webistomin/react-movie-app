import { ActionType } from 'typesafe-actions';
import { initializeApp } from 'store/init/actions';

export enum ActionTypes {
  APP_INITIALIZE = '[app] initialize',
}

export type InitializeApplicationAction = ActionType<typeof initializeApp>;
