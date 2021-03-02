import { createReducer } from '@reduxjs/toolkit';
import cashAction from './action';
import { combineReducers } from 'redux';

const cashList = createReducer([], {
  [cashAction.getCashSuccess]: (_, action) => action.payload,
});
const summ = createReducer(0, {
  [cashAction.Summ]: (_, action) => action.payload,
});
export default combineReducers({
  summ,
  cashList,
});
