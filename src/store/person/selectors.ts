import { ApplicationState } from 'store/store';

export function getPersonDetails(state: ApplicationState) {
  return state.person.personDetails;
}
