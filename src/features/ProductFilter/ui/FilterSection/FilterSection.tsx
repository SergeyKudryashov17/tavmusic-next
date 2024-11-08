import CheckboxInput from "@/shared/ukit/CheckboxInput"
import { FilterOptions, FilterProps, OptionView } from "../../types";
import './FilterSection.scss';

export const FilterSection = ({ title, options }: FilterProps) => {
    return (
        <div className="ProductFilterSection">
            <div className="ProductFilterSection__title">{title}</div>
            <ul className="ProductFilterSection__options">
                { options.map((option: FilterOptions, key: number) => {
                    return ( 
                        <li key={key}>
                            { option.type === OptionView.CHECKBOX && (
                                <CheckboxInput value={option.value}>
                                    {option.label}
                                </CheckboxInput>
                            )}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}