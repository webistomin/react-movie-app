import { ActionTypes } from 'store/types';

export function initializeApp() {
  return {
    type: ActionTypes.APP_INITIALIZE,
  };
}
