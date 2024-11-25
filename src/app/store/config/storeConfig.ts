import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../model/cartSlice';

const reducer = {
	cart: cartSlice		
};

// export const store = configureStore({ reducer });

export const makeStore = () => {
	return configureStore({
		reducer
	})
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
