import { ICategory } from "@/entities/Category";
import Image from 'next/image';
import './SubCategoriesItem.scss';
import Link from "next/link";

export const SubCategoriesItem = (data: ICategory) => {
    return (
        <Link href={`/category/${data.slug}`} className="SubCategoriesItem">
            <div className="SubCategoriesItem__image">
                <Image 
                    src={data.image} 
                    alt={data.name} 
                    width={82} 
                    style={{ borderRadius: '4px'}}
                />
            </div>
            <div className="SubCategoriesItem__data">
                <div className="SubCategoriesItem__title">{data.name}</div>
            </div>
        </Link>
    )
}