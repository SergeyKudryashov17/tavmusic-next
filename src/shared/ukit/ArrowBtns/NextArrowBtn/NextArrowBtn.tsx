import { NextArrowIcon } from "@/shared/icons";
import { arrowPropsType } from "../arrowPropsType";
import '../ArrowBtn.scss';

export const NextArrowBtn = (props: arrowPropsType) => {
    const { style, onClick } = props;
    return (
        <div
            className="ArrowBtn ArrowBtn_next"
            style={{ ...style }}
            onClick={onClick}
        >
            <NextArrowIcon />
        </div>
    );
}