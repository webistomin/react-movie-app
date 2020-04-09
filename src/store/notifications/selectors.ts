import { ApplicationState } from 'store/store';

export function getNotifications(state: ApplicationState) {
  return state.notifications;
}
