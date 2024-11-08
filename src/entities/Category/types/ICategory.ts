import { StaticImageData } from "next/image";

export interface ICategory {
    id: number,
    slug: string,
    name: string,
    image: StaticImageData,
    parentID: number | null
}