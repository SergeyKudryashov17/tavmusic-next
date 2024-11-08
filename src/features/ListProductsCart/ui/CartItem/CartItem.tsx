import { stateProductItem } from "@/app";
import { IProduct } from "@/entities/Product";
import './CartItem.scss';
import { useEffect, useState } from "react";
import { getFormatCost } from "@/shared/utils";
import Counter from "@/shared/ukit/Counter";
import { changeQuantityProduct } from "@/shared/helpers";

export const CartItem = ({ ...productData }: stateProductItem) => {
    const data: IProduct = productData.product;

    const [count, setCount] = useState<number>(productData.count);

    const getFullPrice = () => data.cost * count;
    const [fullPrice, setFullPrice] = useState<number>(getFullPrice());

    const increase = () => {
        const newCount = count + 1;
        changeQuantityProduct(data.id, newCount);
        setCount(newCount);
    }
    const decrease = () => {
        const newCount = count > 1 ? count - 1 : 1;
        changeQuantityProduct(data.id, newCount);
        setCount(newCount);
    }

    useEffect(() => {
        setFullPrice(getFullPrice());
    }, [count]);

    return (
        <div className="CartItem">
            <div className="CartItem__name">
                { data.name }
            </div>
            <div className="CartItem__price">
                { getFormatCost(data.cost) }
            </div>
            <Counter
                className="CartItem__count" 
                count={count}
                onIncrease={increase}
                onDecrease={decrease}
            />
            <div className="CartItem__fullPrice">
                { getFormatCost(fullPrice) }
            </div>
            <div className="CartItem__actions"></div>
        </div>
    )
}