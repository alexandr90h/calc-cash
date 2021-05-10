import { createAction } from '@reduxjs/toolkit';

const getCashRequuest = createAction('cash/getCashRequuest');
const getCashSuccess = createAction('cash/getCashSuccess');
const getCashError = createAction('cash/getCashError');

const getSetingRequuest = createAction('cash/getSetingRequuest');
const getSetingSuccess = createAction('cash/getSetingSuccess');
const getSetingError = createAction('cash/getSetingError');

const summ = createAction('cash/changeSumm');
const cashAction = {
  summ,
  getCashRequuest,
  getCashSuccess,
  getCashError,
  getSetingRequuest,
  getSetingSuccess,
  getSetingError,
};
export default cashAction;
