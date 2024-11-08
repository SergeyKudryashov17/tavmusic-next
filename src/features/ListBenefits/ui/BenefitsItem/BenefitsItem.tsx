import { BenefitsItemType } from "../../types/BenefitsItem";
import './BenefitsItem.scss';

export const BenefitsItem = ({ label, icon, description }: BenefitsItemType) => {
    return (
        <div className="BenefitsItem">
            <div className="BenefitsItem__icon">
                { icon }
            </div>
            <div className="BenefitsItem__label">
                { label }
            </div>
            <div className="BenefitsItem__description">
                { description }
            </div>
        </div>
    );
}