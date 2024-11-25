'use client';

import {IProduct} from "@/entities/Product";
import './CartItem.scss';
import {ReactNode, useEffect, useState} from "react";
import {getFormatCost} from "@/shared/utils";
import Counter from "@/shared/ukit/Counter";
import {useAppDispatch} from "@/app/store/hooks/hooks";
import {cartActions} from "@/app/store/model/cartSlice";
import Link from "next/link";
import {CartItemProps} from "@/features/ListProductsCart/ui/CartItem/types";
import {ListProductViews} from "@/features/ListProductsCart/model";

export const CartItem = (
    { productData, containerView }: CartItemProps
): ReactNode => {
    const data: IProduct = productData.product;

    const [count, setCount] = useState<number>(productData.count);

    const getFullPrice = (): number => data.cost * count;
    const [fullPrice, setFullPrice] = useState<number>(getFullPrice());

    const dispatch = useAppDispatch();

    const changeQuantityProduct = (newCount: number): void => {
        dispatch(
            cartActions.changeQuantity({
                id: data.id,
                count: newCount
            })
        );
        setCount(newCount);
    }

    const increase = () => {
        const newCount = count + 1;
        changeQuantityProduct(newCount);
    }
    const decrease = () => {
        const newCount = count > 1 ? count - 1 : 1;
        changeQuantityProduct(newCount);
    }

    useEffect(() => {
        setFullPrice(getFullPrice());
    }, [count]);

    return (
        <div className={`CartItem CartItem_${containerView}`}>
            <div className="CartItem__name">
                <Link
                    className="CartItem__link"
                    href={`/product/${data.id}`}
                >
                    { data.name }
                </Link>
            </div>
            { containerView === ListProductViews.DEFAULT && (
              <div className="CartItem__price">
                {getFormatCost(data.cost)}
              </div>
            )}
            <Counter
              className="CartItem__count"
              count={count}
                onIncrease={increase}
                onDecrease={decrease}
            />
            <div className="CartItem__fullPrice">
                { getFormatCost(fullPrice) }
            </div>
            { containerView === ListProductViews.DEFAULT && (
              <div className="CartItem__actions"></div>
            )}
        </div>
    )
}