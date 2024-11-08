import { IBrand } from "@/entities/Brand";
import { BrandSliderPropsType } from "../BrandSliderPropsType";
import SlickSlider from "@/shared/ukit/SlickSlider";
import { NextArrowBtn, PrevArrowBtn } from "@/shared/ukit/ArrowBtns";
import BrandItem from "@/features/BrandItem";
import './BrandSlider.scss';

export const BrandSlider = ({ brandList }: BrandSliderPropsType) => {
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrowBtn />,
        prevArrow: <PrevArrowBtn />
    }

    return (
        <SlickSlider className="BrandSlider" settings={settings}>
            { 
                brandList.map((brand: IBrand, index: number) => { 
                    return <BrandItem {...brand} key={`BrandItem-${index}`}/> 
                }) 
            }
        </SlickSlider>
    );
}