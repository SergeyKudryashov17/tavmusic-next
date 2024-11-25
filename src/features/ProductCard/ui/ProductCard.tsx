'use client';

import './ProductCard.scss';
import Link from "next/link";
import type { ProductCardPropsType } from "../types";
import Button, {ButtonSize} from "@/shared/ukit/Button";
import {CartFillIcon} from "@/shared/icons";
import {useState} from "react";
import {stateProductItem} from "@/app";
// import {useAppSelector} from "@/shared/hooks/useAppSelector";
import {getProductsCart} from "@/shared/helpers";
import {useAppDispatch} from "@/app/store/hooks/hooks";
import {useProductData} from "@/entities/Product/hooks/useProductData";
import {cartActions} from "@/app/store/model/cartSlice";
import {useSelector} from "react-redux";

export const ProductCard = ({ data }: ProductCardPropsType): React.ReactNode  => {
    const { id, name, cost, image } = data;

    const productsInCart: stateProductItem[] = useSelector(getProductsCart);
    const isAddedToCart: boolean = Boolean(productsInCart.find(
        (item: stateProductItem) => item.product.id === id )
    );

    const [productInCart, setProductInCart] = useState<boolean>(isAddedToCart);

    const dispatch = useAppDispatch();

    const addToCart = (): void => {
        const productData = useProductData(id);
        dispatch(
            cartActions.addProduct(productData)
        );
        setProductInCart(true);
    }

    const increaseQuantity = (): void => {
        dispatch(
            cartActions.increaseQuantity(id)
        );
    }

    return (
        <div className="ProductCard ProductCard_centered">
            <div className="ProductCard__image" style={{ backgroundImage: `url(${image.src})` }}></div>
            <div className="ProductCard__info">
                <Link className="ProductCard__name" href={`/product/${id}`}>{name}</Link>
                <div className="ProductCard__cost">{cost} ₽</div>
            </div>
            <div className="ProductCard__footer">
                { !productInCart ? (
                    <Button
                        size={ButtonSize.M}
                        className="ProductCard__toCart"
                        onClick={addToCart}
                    >
                        <CartFillIcon />
                        В корзину
                    </Button>
                ) : (
                    <Link
                        className="ProductCard__linkCart"
                        href={`/cart`}
                    >
                        <Button
                            isPrimary={false}
                            size={ButtonSize.M}
                            className="ProductCard__inCart"
                            onClick={increaseQuantity}
                        >
                            <CartFillIcon />
                            В корзине
                        </Button>
                    </Link>
                )}
            </div>
        </div>
    )
}