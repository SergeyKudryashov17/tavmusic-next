import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../types/AppStore";
import { stateProductItem } from "../types/StateProductItem";
import { cartSliceType } from "../types/CartSliceType";

const initialState: cartSliceType = {
    products: []
}

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const newProduct: stateProductItem = {
                product: action.payload,
                count: 1
            }
            state.products = [...state.products, newProduct];
        },

        removeProduct: (state, action) => {
            state.products = state.products.filter((item: stateProductItem) => {
                return item.product.id !== action.payload
            });
        },

        increaseQuantity: (state, action) => {
            state.products = state.products.map((item: stateProductItem) => {
                if (item.product.id === action.payload) {
                    return {
                        product: item.product,
                        count: item.count
                    }
                }

                return item;
            });
        },

        decreaseQuantity: (state, action) => {
            state.products = state.products.map((item: stateProductItem) => {
                if (item.product.id === action.payload) {
                    const newCount = item.count > 1 ? item.count - 1 : 1;
                    return {
                        product: item.product,
                        count: newCount
                    }
                }

                return item;
            });
        },

        changeQuantity: (state, action) => {
            state.products = state.products.map((item: stateProductItem) => {
                if (item.product.id === action.payload.id) {
                    return {
                        product: item.product,
                        count: action.payload.count
                    }
                }

                return item;
            });
        }
    }
});

export const {
    reducer: cartReducer,
    actions: cartActions
} = cartSlice;

export default cartSlice.reducer;

