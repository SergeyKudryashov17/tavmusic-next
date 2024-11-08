import { MenuItemType, MenuPropsType } from "../types";
import { MenuItem } from "./MenuItem";
import './Menu.scss';

export const Menu = ({ list, className }: MenuPropsType) => {
    return (
        <ul className={`Menu ${className}`}>
            { list.map((item: MenuItemType) => {
                return (
                    <li className="Menu__item">
                        <MenuItem {...item} />
                    </li>
                )
            })}
        </ul>
    )
}