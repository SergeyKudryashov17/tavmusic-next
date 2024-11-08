import { categoriesList } from "../data/categoriesList";
import { ICategory } from "../types/ICategory";

export function getMainCategories() {
    return categoriesList.filter((category: ICategory) => category.parentID === null);
}