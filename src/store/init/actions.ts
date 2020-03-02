import { ActionTypes } from 'store/init/types';

export function initializeApp() {
  return {
    type: ActionTypes.APP_INITIALIZE,
  };
}
