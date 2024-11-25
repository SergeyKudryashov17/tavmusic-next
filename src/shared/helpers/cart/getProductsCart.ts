import {stateProductItem} from "@/app";

// ToDo: Поправить типизацию state
export const getProductsCart = (state: any): stateProductItem[] => state.cart.products;