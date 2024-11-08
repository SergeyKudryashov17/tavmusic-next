import { IProduct } from "../types/IProduct";

export function getBreadcrumbProduct(title: string, productID: IProduct['id']) {
    return { title: <div>{title}</div> };
}