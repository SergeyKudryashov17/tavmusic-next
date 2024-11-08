
import { cartActionsDispatch } from "@/app";
import { IProduct } from "@/entities/Product";
import { findProductToCart } from "./findProductToCart";

export function addProductToCart(product: IProduct): void {
    const productInCart = findProductToCart(product.id);

    !productInCart
        ? cartActionsDispatch.addProduct(product)
        : cartActionsDispatch.increaseQuantity(product.id);
}