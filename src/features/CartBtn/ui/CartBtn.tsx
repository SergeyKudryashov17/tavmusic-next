'use client'

import { CartIcon } from "@/shared/icons/CartIcon/CartIcon";
import { CartBtnPropsType } from "../CartBtnPropsType";
import './CartBtn.scss';

export const CartBtn = ({ productCount = 0 }: CartBtnPropsType) => {
    return (
        <button className="CartBtn">
            { productCount > 0 && (
                <div className="CartBtn__counter">
                    { productCount }
                </div>
            )}
            <CartIcon className="CartBtn__icon" />
        </button>
    );
}