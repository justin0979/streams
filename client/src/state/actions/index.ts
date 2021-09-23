import { ActionType } from '&state/action-types';

export interface SignInAction {
  type: ActionType.SIGN_IN;
  payload: string | undefined;
}

export interface SignOutAction {
  type: ActionType.SIGN_OUT;
  payload: null;
}

export interface CreateStreamAction {
  type: ActionType.CREATE_STREAM;
}

export type Action =
  | SignOutAction
  | SignInAction
  | CreateStreamAction;
