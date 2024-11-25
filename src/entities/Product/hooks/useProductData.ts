import { productList } from "../data/productList";
import { IProduct } from "../types/IProduct";

export function useProductData(productID: IProduct['id']): IProduct | undefined {
    return productList.find((product: IProduct): boolean => product.id === productID);
}