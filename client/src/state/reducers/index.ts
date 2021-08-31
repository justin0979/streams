import { combineReducers } from 'redux';

const reducers = combineReducers({
  erase: () => 'this',
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
