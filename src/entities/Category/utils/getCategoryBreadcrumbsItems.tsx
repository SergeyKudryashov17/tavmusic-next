import Link from "next/link";
import { ICategory } from "../types/ICategory";
import { getParentsCategoryChain } from "./getParentsCategoryChain";

export function getCategoryBreadcrumbsItems(currentCategoryID: ICategory['id'] | undefined) {
    const firstBreadcrumb = { title: <Link href="/">Главная</Link> };

    if (currentCategoryID === undefined) return [firstBreadcrumb];

    const parentsCategoriesChain = getParentsCategoryChain(currentCategoryID);

    const breadcrumbsCategories = parentsCategoriesChain.map((category: ICategory) => {
        return  { title: <Link href={`/category/${category.slug}`}>{category.name}</Link> }
    });

    return [firstBreadcrumb, ...breadcrumbsCategories];
}