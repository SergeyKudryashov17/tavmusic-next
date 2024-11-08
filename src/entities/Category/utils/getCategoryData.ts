import { categoriesList } from "../data/categoriesList";
import { ICategory } from "../types/ICategory";

export function getCategoryData(
    id: ICategory['id'] | ICategory['slug']
) {
    const currentCategory = categoriesList.find((item: ICategory) => item.slug === id || item.id === id);
    return currentCategory || null;
}