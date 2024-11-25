import { getParentsCategoryChain, ICategory } from "@/entities/Category";
import Link from "next/link";

export default function getBreadcrumbs(currentCategoryID: ICategory['id'] | undefined) {
    if (currentCategoryID === undefined) return [];

    const parentsCategoriesChain = getParentsCategoryChain(currentCategoryID);

    const breadcrumbsCategories = parentsCategoriesChain.map((category: ICategory, index: number) => {
        const linkElement = index !== parentsCategoriesChain.length - 1
                                ? <Link href={`${category.slug}`}>{category.name}</Link>
                                : <div>{category.name}</div>;
        return  { title: linkElement }
    });

    return breadcrumbsCategories;
}