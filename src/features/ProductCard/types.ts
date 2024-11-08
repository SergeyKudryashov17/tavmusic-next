import { IProduct } from "@/entities/Product"

export type ProductCardPropsType = {
    data: IProduct,
    btnHandler: () => void
}