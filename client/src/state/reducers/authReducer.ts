import { Action } from '&state/actions';
import { AuthActionType } from '&state/action-types';

interface AuthReducerState {
  isSignedIn: boolean | null;
  userId: string | undefined | null;
}

const INITIAL_STATE: AuthReducerState = {
  isSignedIn: null,
  userId: null,
};

export const authReducer = (
  state: AuthReducerState = INITIAL_STATE,
  action: Action,
): AuthReducerState => {
  switch (action.type) {
    case AuthActionType.SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload,
      };
    case AuthActionType.SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        userId: action.payload,
      };
    default:
      return state;
  }
};
