import { createAction } from '@reduxjs/toolkit';

const getCashRequuest = createAction('cash/getCashRequuest');
const getCashSuccess = createAction('cash/getCashSuccess');
const getCashError = createAction('cash/getCashError');

const summ = createAction('cash/changeSumm');
const cashAction = { summ, getCashRequuest, getCashSuccess, getCashError };
export default cashAction;
