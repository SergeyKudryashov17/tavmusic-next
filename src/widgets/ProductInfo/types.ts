import { IProduct } from "@/entities/Product"

export interface IProductInfoProps extends IProduct {
    formatCost: string | null,
    shortDesc: string | null
}