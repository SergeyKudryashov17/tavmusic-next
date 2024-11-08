import { IBrand } from "@/entities/Brand";
import Image from "next/image";
import Link from "next/link";
import './BrandItem.scss';

export const BrandItem = (data: IBrand) => {
    return (
        <Link className="BrandItem" href={`/brand/${data.id}`}>
            <Image 
                className="BrandItem__image"
                width={100}
                height={100}
                src={data.picture.src}
                alt={data.title}
            />
        </Link>
    );
}