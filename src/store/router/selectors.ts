import { ApplicationState } from 'store/store';

export function getCurrentLocation(state: ApplicationState) {
  return state.router.location;
}
