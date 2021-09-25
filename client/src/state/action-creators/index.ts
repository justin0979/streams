import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';
import {
  AuthActionType,
  RestActionType,
} from '&state/action-types';
import {
  SignInAction,
  SignOutAction,
  Action,
} from '&state/actions';
import streams from '&apis/streams';
import { FormValuesType } from '&src/formValuesTypes';

export const signIn = (
  userId: string | undefined,
): SignInAction => {
  return {
    type: AuthActionType.SIGN_IN,
    payload: userId,
  };
};

export const signOut = (): SignOutAction => {
  return {
    type: AuthActionType.SIGN_OUT,
    payload: null,
  };
};

export const createStream =
  (formValues: FormValuesType) =>
  async (dispatch: Dispatch<Action>) => {
    const response: AxiosResponse<FormValuesType> =
      await streams.post('/streams', formValues);

    dispatch({
      type: RestActionType.CREATE_STREAM,
      payload: response.data,
    });
  };

export const fetchStreams =
  () => async (dispatch: Dispatch<Action>) => {
    const response = await streams.get('/streams');

    dispatch({
      type: RestActionType.FETCH_STREAMS,
      payload: response.data,
    });
  };

export const fetchStream =
  (id: string) => async (dispatch: Dispatch<Action>) => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({
      type: RestActionType.FETCH_STREAM,
      payload: response.data,
    });
  };

export const editStream =
  (id: string, formValues: FormValuesType) =>
  async (dispatch: Dispatch<Action>) => {
    const response = await streams.put(
      `/streams/${id}`,
      formValues,
    );

    dispatch({
      type: RestActionType.EDIT_STREAM,
      payload: response.data,
    });
  };

export const deleteStream =
  (id: string) => async (dispatch: Dispatch<Action>) => {
    await streams.delete(`/streams/${id}`);

    dispatch({
      type: RestActionType.DELETE_STREAM,
      payload: id,
    });
  };
