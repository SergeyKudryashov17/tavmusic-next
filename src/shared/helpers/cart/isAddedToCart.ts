import { IProduct } from "@/entities/Product";
import { findProductToCart } from "./findProductToCart";

export function isAddedToCart(productID: IProduct['id']) {
    return Boolean(findProductToCart(productID));
}