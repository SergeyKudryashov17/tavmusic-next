import {stateProductItem} from "@/app";
import {IProduct} from "@/entities/Product";

export type ProductsTableProps = ProductsTableColumnsConfig & ProductsTableItemActions & {
  products: stateProductItem[] | []
}

export type ProductsTableItemProps = ProductsTableColumnsConfig & ProductsTableItemActions & {
  productData: stateProductItem,
}

export type ProductsTableColumnsConfig = {
  columnsConfig: ProductsTableColumns[]
}

export type ProductsTableItemActions = {
  onIncrease?: (id: IProduct['id']) => void,
  onDecrease?: (id: IProduct['id']) => void,
  onDelete?: (id: IProduct['id']) => void
}

export enum ProductsTableColumns {
  TITLE = 'title',
  IMAGE = 'image',
  PRICE = 'cost',
  COUNTER = 'counter',
  COUNT = 'count',
  SUM_PRICE = 'sum_price',
  DELETE = 'delete'
}