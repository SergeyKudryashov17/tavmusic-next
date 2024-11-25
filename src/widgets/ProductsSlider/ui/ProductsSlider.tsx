'use client';

import SlickSlider from "@/shared/ukit/SlickSlider";
import { ProductSliderPropsType } from "../types/ProductSliderPropsType";
import { IProduct } from "@/entities/Product";
import ProductCard from "@/features/ProductCard";
import './ProductsSlider.scss';
import { NextArrowBtn, PrevArrowBtn } from "@/shared/ukit/ArrowBtns";

export const ProductsSlider = ({ productList }: ProductSliderPropsType) => {
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrowBtn />,
        prevArrow: <PrevArrowBtn />
    }

    return (
        <SlickSlider className="ProductsSlider" settings={settings}>
            { productList.map((product: IProduct, index: number) => { 
                return (
                    <ProductCard 
                        data={product} 
                        key={`ProductCard-${index}`}
                    />
                )
            })}
        </SlickSlider>
    );
}