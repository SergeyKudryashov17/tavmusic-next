import { stateProductItem, store } from "@/app";
import { IProduct } from "@/entities/Product";

export function findProductToCart(productID: IProduct['id']): stateProductItem | undefined {
    const products = store.getState().cart.products;

    return products.find((item: stateProductItem) => {
        return item.product.id === productID;
    });
}