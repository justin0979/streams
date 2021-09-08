import { ActionType } from '&state/action-types';
import { SignInAction, SignOutAction } from '&state/actions';

export const signIn = (): SignInAction => {
  return {
    type: ActionType.SIGN_IN,
  };
};

export const signOut = (): SignOutAction => {
  return {
    type: ActionType.SIGN_OUT,
  };
};
