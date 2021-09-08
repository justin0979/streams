import { Action } from '&state/actions';
import { ActionType } from '&state/action-types';

export const authReducer = (state = '', action: Action) => {
  switch (action.type) {
    case ActionType.SIGN_IN:
      return state;
    case ActionType.SIGN_OUT:
      return state;
    default:
      return state;
  }
};
