import { categoriesList, ICategory } from '@/entities/Category';
import './GridCategories.scss';
import CategoryItem from '@/features/CategoryItem';
import { GridCategoriesProps } from '../types';

export const GridCategories = ({ listCategories }: GridCategoriesProps) => {
    return (
        <div className="GridCategories">
            { 
                listCategories.map((category: ICategory, index: number) => {
                    return (
                        <CategoryItem 
                            {...category} 
                            key={`CategoryItem-${index}`} 
                        />
                    )
                })
            }
        </div>
    );
}