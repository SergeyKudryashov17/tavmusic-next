import { useEffect, useRef, useState } from "react";
import { ProductGalleryPropsType } from "../types";
import SlickSlider from "@/shared/ukit/SlickSlider";
import './ProductGallery.scss';

export const ProductGallery = ({ className, photoList }: ProductGalleryPropsType) => {
    const [nav1, setNav1] = useState<any>(null);
    const [nav2, setNav2] = useState<any>(null);

    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    const settingMain = {
        slidesToShow: 1,
        asNavFor: nav2,
        ref: (slider: any) => { sliderRef1 = slider }
    };
    const settingNav = {
        asNavFor: nav1,
        ref: (slider: any) => { sliderRef2 = slider },
        slidesToShow: 3,
        swipeToSlide: true,
        focusOnSelect: true
    };
    
    return (
        <div className={`ProductGallery ${className}`}>
            <img className="ProductGallery__image" src={photoList[0]} alt="" />
            {/* <SlickSlider className="ProductGallery__mainSlider" settings={settingMain}>
                { photoList.map(photo => <img src={photo} alt="" />) }
            </SlickSlider>

            <SlickSlider className="ProductGallery__navSlider" settings={settingNav}>
                { photoList.map(photo => <img src={photo} alt="" />) }
            </SlickSlider> */}
        </div>
    );
}