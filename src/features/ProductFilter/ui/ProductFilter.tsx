import { FilterProps, ProductFilterPros } from "../types";
import { FilterSection } from "./FilterSection/FilterSection";

export const ProductFilter = ({ config }: ProductFilterPros) => {
    return (
        <div className="ProductFilter">
            <div className="ProductFilter__container">
                { config.map((filter: FilterProps, key: number) => {
                    return (
                        <FilterSection
                            id={filter.id}
                            key={key}
                            title={filter.title}
                            options={filter.options}
                        />
                    )
                })}
            </div>
        </div>
    );
}