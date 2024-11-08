import { PrevArrowIcon } from "@/shared/icons";
import { arrowPropsType } from "../arrowPropsType";
import '../ArrowBtn.scss';

export const PrevArrowBtn = (props: arrowPropsType) => {
    const { style, onClick } = props;
    return (
        <div
            className="ArrowBtn ArrowBtn_prev"
            style={{ ...style }}
            onClick={onClick}
        >
            <PrevArrowIcon />
        </div>
    );
}