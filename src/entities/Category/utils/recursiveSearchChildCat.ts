import { ICategory } from "../types/ICategory";
import { getChildCategories } from "./getChildCategories";

export function recursiveSearchChildCat(parentID: ICategory['parentID']) {
    let categories = getChildCategories(parentID);
    let fullList = categories;

    if (categories.length > 0) {

        categories.forEach(cat => {
            fullList = [...fullList, ...recursiveSearchChildCat(cat.id)];
        })
    }

    return fullList;
}