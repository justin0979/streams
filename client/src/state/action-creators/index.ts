import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';
import { ActionType } from '&state/action-types';
import {
  SignInAction,
  SignOutAction,
  CreateStreamAction,
  Action,
} from '&state/actions';
import streams from '&apis/streams';
import { FormValuesType } from '&src/formValuesTypes';

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

export const createStream =
  (formValues: FormValuesType) =>
  async (dispatch: Dispatch<Action>) => {
    const response: AxiosResponse<FormValuesType> =
      await streams.post('/streams', formValues);

    dispatch({
      type: ActionType.CREATE_STREAM,
      payload: response.data,
    });
  };
