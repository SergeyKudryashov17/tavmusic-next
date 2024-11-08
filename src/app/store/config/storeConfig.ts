import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../model/cartSlice';

const reducer = {
  cart: cartSlice
};

export const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
