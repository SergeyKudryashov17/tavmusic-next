'use client';

import { getProductsCart } from "@/shared/helpers";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { CartItem } from "./CartItem/CartItem";
import { stateProductItem } from "@/app";
import './ListProductsCart.scss';
import { useState } from "react";

export const ListProductsCart = () => {
    const productsInCart = useAppSelector(getProductsCart);
    
    return (
        <div className="ListProductsCart">
            <div className="ListProductsCart__header">
                <div>Название товара</div>
                <div>Цена</div>
                <div>Кол-во</div>
                <div>Стоимость</div>
                <div></div>
            </div>
            <div className="ListProductsCart__body">
                { productsInCart.map((product: stateProductItem) => {
                    return <CartItem {...product}/>
                }) }
            </div>
        </div>
    )
}