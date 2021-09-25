import { RestActionType } from '&state/action-types';
import { Action } from '&state/actions';
import { StoredFormValues } from '&src/CustomTypes';

interface StreamsState {
  [id: string]: StoredFormValues;
}

export const streamsReducer = (
  state: StreamsState = {},
  action: Action,
): StreamsState => {
  switch (action.type) {
    case RestActionType.EDIT_STREAM:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    default:
      return state;
  }
};
