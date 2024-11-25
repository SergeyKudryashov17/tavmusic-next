import { stateProductItem } from "@/app";
import { useAppStore } from "@/app/store/hooks/hooks";
import { IProduct } from "@/entities/Product";

export function findProductToCart(productID: IProduct['id']): stateProductItem | undefined {
    const store = useAppStore();
    const products = store.getState().cart.products;

    return products.find((item: stateProductItem) => {
        return item.product.id === productID;
    });
}