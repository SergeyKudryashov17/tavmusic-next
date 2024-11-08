import { BenefitsItemType } from "../../types/BenefitsItem";
import { BenefitsItem } from "../BenefitsItem/BenefitsItem";
import { benefits } from "../../data/benefits";
import './ListBenefits.scss';

export const ListBenefits = () => {
    return ( 
        <div className="ListBenefits">
            { benefits.map((item: BenefitsItemType, key: number) => 
                <BenefitsItem 
                    key={`BenefitsItem-${key}`} 
                    {...item}
                />) 
            }
        </div>
    );
}