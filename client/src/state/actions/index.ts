import { FormValuesType } from '&src/formValuesTypes';
import { AuthActionType, ActionType } from '&state/action-types';

export interface SignInAction {
  type: AuthActionType.SIGN_IN;
  payload: string | undefined;
}

export interface SignOutAction {
  type: AuthActionType.SIGN_OUT;
  payload: null;
}

export interface CreateStreamAction {
  type: ActionType.CREATE_STREAM;
  payload: FormValuesType;
}

export interface FetchStreamsAction {
  type: ActionType.FETCH_STREAMS;
  payload: FormValuesType[];
}

export interface FetchStreamAction {
  type: ActionType.FETCH_STREAM;
  payload: FormValuesType;
}

export interface DeleteStreamAction {
  type: ActionType.DELETE_STREAM;
  payload: null;
}

export interface EditStreamAction {
  type: ActionType.EDIT_STREAM;
  payload: FormValuesType;
}

export type Action =
  | SignOutAction
  | SignInAction
  | CreateStreamAction
  | FetchStreamsAction
  | FetchStreamAction
  | DeleteStreamAction
  | EditStreamAction;
