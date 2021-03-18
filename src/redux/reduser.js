import { createReducer } from '@reduxjs/toolkit';
import cashAction from './action';
import { combineReducers } from 'redux';

const cashList = createReducer([], {
  [cashAction.getCashSuccess]: (state, action) => (state = action.payload),
});
const summ = createReducer(0, {
  [cashAction.summ]: (state, action) => (state = action.payload),
});
export default combineReducers({
  summ,
  cashList,
});
