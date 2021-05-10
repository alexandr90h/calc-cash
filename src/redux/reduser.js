import { createReducer } from '@reduxjs/toolkit';
import cashAction from './action';
import { combineReducers } from 'redux';

const cashList = createReducer([], {
  [cashAction.getCashSuccess]: (state, action) => (state = action.payload),
});

const setingList = createReducer(
  {},
  {
    [cashAction.getSetingSuccess]: (state, action) => (state = action.payload),
  },
);

const summ = createReducer(0, {
  [cashAction.summ]: (state, action) => (state = action.payload),
});
const isLoading = createReducer(false, {
  [cashAction.getCashSuccess]: () => true,
  [cashAction.getSetingSuccess]: () => true,
});
export default combineReducers({
  summ,
  cashList,
  isLoading,
  setingList,
});
