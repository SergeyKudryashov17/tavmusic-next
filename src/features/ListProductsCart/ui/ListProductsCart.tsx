'use client';

import {CartItem} from "./CartItem/CartItem";
import {stateProductItem} from "@/app";
import './ListProductsCart.scss';
import {getProductsCart} from "@/shared/helpers";
import {useSelector} from "react-redux";
import {ReactNode} from "react";
import {ListProductsCartProps} from "../types";
import {ListProductViews} from "@/features/ListProductsCart/model";

export const ListProductsCart = (
  { view = ListProductViews.DEFAULT }: ListProductsCartProps
): ReactNode => {
    const productsInCart: stateProductItem[] = useSelector(getProductsCart);
    
    return (
        <div className={`ListProductsCart ListProductsCart_${view}`}>
            <div className="ListProductsCart__header">
                <div>Название товара</div>
                { view === ListProductViews.DEFAULT && (
                  <div>Цена</div>
                )}
                <div>Кол-во</div>
                <div>Стоимость</div>
                { view === ListProductViews.DEFAULT && (
                  <div></div>
                )}
            </div>
            <div className="ListProductsCart__body">
                { productsInCart.map((product: stateProductItem, index: number) => {
                    return (
                        <CartItem
                            key={`CartItem-${index}`}
                            productData={product}
                            containerView={view}
                        />
                    )
                }) }
            </div>
        </div>
    )
}