import { configureStore } from '@reduxjs/toolkit';
import cash from './reduser';

const store = configureStore({
  reducer: cash,
});
export default store;
