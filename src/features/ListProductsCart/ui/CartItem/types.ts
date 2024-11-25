import {stateProductItem} from "@/app";
import {ListProductViews} from "@/features/ListProductsCart/model";

export type CartItemProps = {
  productData: stateProductItem,
  containerView: ListProductViews
}