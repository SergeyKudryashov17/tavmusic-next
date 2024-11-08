import { getChildCategories, ICategory } from "@/entities/Category"
import { SubCategoriesListProps } from "../types";
import { SubCategoriesItem } from "./SubCategoriesItem";
import './SubCategoriesList.scss';

export const SubCategoriesList = ({ list }: SubCategoriesListProps) => {
    return (
        <div className="SubCategoriesList">
            { list.map((subcategory: ICategory, index: number) => {
                return <SubCategoriesItem 
                            key={`SubCategoriesItem-${index}`} 
                            {...subcategory} 
                        />;
            })}
        </div>
    )
}