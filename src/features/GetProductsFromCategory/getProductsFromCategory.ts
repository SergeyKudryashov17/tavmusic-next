import { ICategory, recursiveSearchChildCat } from "@/entities/Category";
import { IProduct, productList } from "@/entities/Product";

export function getProductsFromCategory(categoryID: ICategory['id']) {
    const childCategories = recursiveSearchChildCat(categoryID);
    const childCategoriesIDs = childCategories.map((cat: ICategory) => cat.id);
    const fullCatList = [categoryID, ...childCategoriesIDs];

    // Получить список всех товаров этих категорий
    const productsFromCategory = productList.filter((product: IProduct) => {
        return fullCatList.includes(product.categoryID);
    })

    return productsFromCategory;
}