import Slider from "react-slick";
import { SlickSliderPropsType } from "../SlickSliderPropsType";
import 'slick-carousel/slick/slick.css';

export const SlickSlider = ({ settings, className, children }: SlickSliderPropsType) => {
    return (
        <Slider className={className} {...settings}>
            { children }
        </Slider>
    );
}