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

export const getDebts = () => async dispatch => {
  dispatch(cashAction.getDebtsRequuest());
  try {
    const res = await API.getDebtsAll();
    dispatch(cashAction.getDebtsgSuccess(res));
  } catch (error) {
    dispatch(cashAction.getDebtsError(error.message));
  }
};

export const getDebtById = id => async dispatch => {
  dispatch(cashAction.getDebtByIdRequuest());
  try {
    const res = await API.getDebtById(id);
    dispatch(cashAction.getDebtByIdgSuccess(res));
  } catch (error) {
    dispatch(cashAction.getDebtByIdError(error.message));
  }
};
