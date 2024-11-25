//
// // import { cartActionsDispatch } from "@/app";
// import { IProduct } from "@/entities/Product";
// import { findProductToCart } from "./findProductToCart";
// import { useAppDispatch } from "@/app/store/hooks/hooks";
// import { cartActions } from "@/app/store/model/cartSlice";
//
// export function addProductToCart(product: IProduct): void {
//     const productInCart = findProductToCart(product.id);
//
//     const dispatch = useAppDispatch();
//
//     const action = !productInCart
//         ? cartActions.addProduct(product)
//         : cartActions.increaseQuantity(product.id);
//
//     dispatch(action);
// }