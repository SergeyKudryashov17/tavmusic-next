import { productList } from "../data/productList";
import { IProduct } from "../types/IProduct";

export function useProductData(productID: IProduct['id']) {
    return productList.find((product: IProduct) => product.id === productID);
}