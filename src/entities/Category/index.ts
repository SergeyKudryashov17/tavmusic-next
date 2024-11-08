import { categoriesList } from "./data/categoriesList";
import { ICategory } from "./types/ICategory";
import { getCategoryData } from "./utils/getCategoryData";
import { getChildCategories } from "./utils/getChildCategories";
import { getParentsCategoryChain } from "./utils/getParentsCategoryChain";
import { getMainCategories } from "./utils/getMainCategories";
import { recursiveSearchChildCat } from "./utils/recursiveSearchChildCat";
import { getCategoryBreadcrumbsItems } from "./utils/getCategoryBreadcrumbsItems";

export {
    categoriesList,

    getCategoryData,
    getChildCategories,
    getParentsCategoryChain,
    getMainCategories,
    recursiveSearchChildCat,
    getCategoryBreadcrumbsItems,
    
    type ICategory
}