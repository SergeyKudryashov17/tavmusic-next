import { HeadlinePropsType } from "../HeadlineTypes";
import './Headline.scss';

export const Headline = ({ children, view, style }: HeadlinePropsType): JSX.Element => {
    return (
        <div className={`Headline Headline_${view}`} style={{ ...style }}>
            { children }
        </div>
    )
}