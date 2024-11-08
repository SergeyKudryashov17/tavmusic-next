import { AppState } from "@/app/store/types/AppStore";

export const getProductsCart = (state: AppState) => state.cart.products;