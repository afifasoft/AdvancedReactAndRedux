import { CHANGE_AUTH } from 'actions/types';
export default function(action, state = false) {

  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload;
    default:
      return state;

  }
}
