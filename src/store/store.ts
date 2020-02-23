import { createStore } from 'redux';

interface IAction {
  type: string;
  payload: string;
}

function todos(state = [], action: IAction) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
      };
    default:
      return state;
  }
}

const store = createStore(todos);

export default store;
