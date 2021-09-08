import { Action } from '&state/actions';
import { ActionType } from '&state/action-types';

interface AuthReducerState {
  isSignedIn: boolean | null;
}

const INITIAL_STATE: AuthReducerState = {
  isSignedIn: null,
};

export const authReducer = (
  state: AuthReducerState = INITIAL_STATE,
  action: Action,
): AuthReducerState => {
  switch (action.type) {
    case ActionType.SIGN_IN:
      return { ...state, isSignedIn: true };
    case ActionType.SIGN_OUT:
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};
