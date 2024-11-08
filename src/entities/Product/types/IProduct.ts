import { StaticImageData } from "next/image";

export interface IProduct {
    id: number,
    name: string,
    categoryID: number,
    brandID: number,
    cost: number,
    image: StaticImageData,
    description?: string,
    characteristics?: string[]
}