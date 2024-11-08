'use client';

import Button, { ButtonSize } from "@/shared/ukit/Button";
import './ProductCard.scss';
import Link from "next/link";
import type { ProductCardPropsType } from "../types";
import { CartFillIcon } from "@/shared/icons";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { getProductsCart } from "@/shared/helpers";
import { stateProductItem } from "@/app";

export const ProductCard = ({ data, btnHandler }: ProductCardPropsType)  => {
    const { id, name, cost, image } = data;

    const productsInCart = useAppSelector(getProductsCart);
    const isAddedToCart = Boolean(productsInCart.find((item: stateProductItem) => item.product.id === id ));

    return (
        <div className="ProductCard ProductCard_centered">
            <div className="ProductCard__image" style={{ backgroundImage: `url(${image.src})` }}></div>
            <div className="ProductCard__info">
                <Link className="ProductCard__name" href={`/product/${id}`}>{name}</Link>
                <div className="ProductCard__cost">{cost} ₽</div>
            </div>
            <div className="ProductCard__footer">
                { !isAddedToCart ? (
                    <Button 
                        size={ButtonSize.M} 
                        className="ProductCard__toCart"
                        onClick={btnHandler}
                    >
                        <CartFillIcon />
                        В корзину
                    </Button>
                ) : (
                    <Link href={`/cart`}>
                        <Button 
                            isPrimary={false}
                            size={ButtonSize.M} 
                            className="ProductCard__inCart"
                            onClick={btnHandler}
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