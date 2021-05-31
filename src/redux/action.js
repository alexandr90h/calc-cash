import { createAction } from '@reduxjs/toolkit';

const getCashRequuest = createAction('cash/getCashRequuest');
const getCashSuccess = createAction('cash/getCashSuccess');
const getCashError = createAction('cash/getCashError');

const getSetingRequuest = createAction('cash/getSetingRequuest');
const getSetingSuccess = createAction('cash/getSetingSuccess');
const getSetingError = createAction('cash/getSetingError');

const getDebtsRequuest = createAction('cash/getDebtsRequuest');
const getDebtsgSuccess = createAction('cash/getDebtsSuccess');
const getDebtsError = createAction('cash/getDebtsError');

const getDebtByIdRequuest = createAction('cash/getDebtByIdRequuest');
const getDebtByIdgSuccess = createAction('cash/getDebtByIdSuccess');
const getDebtByIdError = createAction('cash/getDebtByIdError');

const addCashItem = createAction('cash/addCashItem');
const cashAction = {
  addCashItem,
  getCashRequuest,
  getCashSuccess,
  getCashError,
  getSetingRequuest,
  getSetingSuccess,
  getSetingError,
  getDebtsRequuest,
  getDebtsgSuccess,
  getDebtsError,
  getDebtByIdRequuest,
  getDebtByIdgSuccess,
  getDebtByIdError,
};
export default cashAction;
