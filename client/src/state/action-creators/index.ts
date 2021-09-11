import { ActionType } from '&state/action-types';
import { SignInAction, SignOutAction } from '&state/actions';

export const signIn = (
  userId: string | undefined,
): SignInAction => {
  return {
    type: ActionType.SIGN_IN,
    payload: userId,
  };
};

export const signOut = (): SignOutAction => {
  return {
    type: ActionType.SIGN_OUT,
    payload: null,
  };
};
