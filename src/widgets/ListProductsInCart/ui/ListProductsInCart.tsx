import ProductsTable, {ProductsTableColumns} from "@/features/ProductsTable";
import {stateProductItem} from "@/app";
import {useSelector} from "react-redux";
import {getProductsCart} from "@/shared/helpers";

export const ListProductsInCart = () => {
  const productsInCart: stateProductItem[] = useSelector(getProductsCart);

  const columnsConfig = [
    ProductsTableColumns.TITLE,
    ProductsTableColumns.IMAGE,
    ProductsTableColumns.PRICE,
    ProductsTableColumns.COUNTER,
    ProductsTableColumns.SUM_PRICE,
    ProductsTableColumns.DELETE
  ];

  return (
    <ProductsTable
      columnsConfig={columnsConfig}
      products={productsInCart}
    />
  )
}