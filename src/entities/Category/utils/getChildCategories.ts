import { categoriesList } from "../data/categoriesList";
import { ICategory } from "../types/ICategory";

export function getChildCategories(parentID: ICategory['parentID']): ICategory[] | [] {
    return categoriesList.filter((category: ICategory) => category.parentID === parentID);
}