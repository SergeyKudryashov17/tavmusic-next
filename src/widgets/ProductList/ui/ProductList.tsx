import { IProduct } from "@/entities/Product";
import { ProductListProps } from "../types";
import ProductCard from "@/features/ProductCard";
import './ProductList.scss';
import { addProductToCart } from "@/shared/helpers";

export const ProductList = ({ list }: ProductListProps) => {
    return (
        <div className="productList">
            { list.map((product: IProduct, key: number) => {
                return (
                    <ProductCard 
                        key={`ProductCard-${key}`} 
                        data = {product}
                        btnHandler={() => addProductToCart(product)}
                    />
                )
            })}
        </div>
    );
}