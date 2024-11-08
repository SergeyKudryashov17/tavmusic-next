import { ICategory } from "@/entities/Category";
import './CategoryItem.scss';
import Link from "next/link";

export const CategoryItem = ({ slug, name, image }: ICategory) => {
    return (
        <Link href={`/category/${slug}`} className="CategoryItem">
            <div className="CategoryItem__image" style={{ backgroundImage: `url(${image.src})` }}></div>
            <div className="CategoryItem__name">
                {name}
            </div>
        </Link>
    )
}