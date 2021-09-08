import { ActionType } from '&state/action-types';

export interface SignInAction {
  type: ActionType.SIGN_IN;
}

export interface SignOutAction {
  type: ActionType.SIGN_OUT;
}

export type Action = SignOutAction | SignInAction;
