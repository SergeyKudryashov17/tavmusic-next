import { ContainerPropsType } from "../types";
import './Container.scss';

export const Container = ({ children }: ContainerPropsType) => {
    return (
        <div className="Container">
            {children}
        </div>
    )
}
