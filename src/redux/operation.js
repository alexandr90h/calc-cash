import cashAction from './action';
import * as API from '../api/api';

export const getCash = () => async dispatch => {
  dispatch(cashAction.getCashRequuest());
  try {
    const res = await API.getCash();
    dispatch(cashAction.getCashSuccess(res));
  } catch (error) {
    dispatch(cashAction.getCashError(error.message));
  }
};

export const getSeting = () => async dispatch => {
  dispatch(cashAction.getSetingRequuest());
  try {
    const res = await API.getSeting();
    dispatch(cashAction.getSetingSuccess(res));
  } catch (error) {
    dispatch(cashAction.getSetingError(error.message));
  }
};
