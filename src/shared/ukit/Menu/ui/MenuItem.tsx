import { MenuItemType } from "../types";
import Link from "next/link";

export const MenuItem = (props: MenuItemType) => {
    const { label, link } = props;
    return (
        <Link href={link} className="Menu__link">
            {label}
        </Link>
    )
}