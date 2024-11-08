import { IProduct } from "@/entities/Product"

type ProductCharsListPropsType = {
    list: IProduct['characteristics']
}

export const ProductCharsList = ({ list }: ProductCharsListPropsType) => {
    return (
        list?.map((item: string, index: number) => {
            return (
                <div key={`product-char-${index}`}>{item}</div>
            ) 
        })
    )
}