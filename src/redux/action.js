import { createAction } from '@reduxjs/toolkit';

const getCashRequuest = createAction('cash/getCashRequuest');
const getCashSuccess = createAction('cash/getCashSuccess');
const getCashError = createAction('cash/getCashError');

const Summ = createAction('cash/changeSumm');
const cashAction = { Summ, getCashRequuest, getCashSuccess, getCashError };
export default cashAction;
