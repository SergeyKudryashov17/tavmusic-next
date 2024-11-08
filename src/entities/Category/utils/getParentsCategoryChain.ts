import { ICategory } from "../types/ICategory";
import { getCategoryData } from "./getCategoryData";

export function getParentsCategoryChain(
    parentID: ICategory['id'], 
    chain: ICategory[] | [] = []
): ICategory[] | [] {
    let arrChain = chain || [];

    const parent = getCategoryData(parentID);

    if (parent !== null) {
        arrChain = [parent, ...arrChain];

        if (parent.parentID) {
            let subChain = getParentsCategoryChain(parent.parentID, arrChain);
            arrChain = subChain;
        }
    }
    
    return arrChain;
}