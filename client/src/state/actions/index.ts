import { StoredFormValues } from '&src/CustomTypes';
import {
  AuthActionType,
  RestActionType,
} from '&state/action-types';

export interface SignInAction {
  type: AuthActionType.SIGN_IN;
  payload: string | undefined;
}

export interface SignOutAction {
  type: AuthActionType.SIGN_OUT;
  payload: null;
}

export interface CreateStreamAction {
  type: RestActionType.CREATE_STREAM;
  payload: StoredFormValues;
}

export interface FetchStreamsAction {
  type: RestActionType.FETCH_STREAMS;
  payload: StoredFormValues[];
}

export interface FetchStreamAction {
  type: RestActionType.FETCH_STREAM;
  payload: StoredFormValues;
}

export interface DeleteStreamAction {
  type: RestActionType.DELETE_STREAM;
  payload: string;
}

export interface EditStreamAction {
  type: RestActionType.EDIT_STREAM;
  payload: StoredFormValues;
}

export type Action =
  | SignOutAction
  | SignInAction
  | CreateStreamAction
  | FetchStreamsAction
  | FetchStreamAction
  | DeleteStreamAction
  | EditStreamAction;
