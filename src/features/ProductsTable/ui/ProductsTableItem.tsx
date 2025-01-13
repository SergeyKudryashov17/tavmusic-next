import Image from "next/image";
import Counter from "@/shared/ukit/Counter";
import {ProductsTableItemProps} from "@/features/ProductsTable/types";
import {ReactNode} from "react";
import {
  hasColumnCount,
  hasColumnCounter, hasColumnDelete,
  hasColumnImage,
  hasColumnPrice, hasColumnSumPrice,
  hasColumnTitle
} from "@/features/ProductsTable/utils";
import {IProduct} from "@/entities/Product";
import {getFormatCost} from "@/shared/utils";
import {SYMBOL_RUB} from "@/shared/consts";
import {CloseIcon} from "@/shared/icons";

export const ProductsTableItem = (
  { columnsConfig, productData, onIncrease, onDecrease, onDelete }: ProductsTableItemProps
):ReactNode => {
  function handlerProperty(
    propertyFunc: ((id: IProduct['id']) => void) | undefined,
    productID: IProduct['id']
  ): void {
    if (propertyFunc) {
      propertyFunc(productID)
    } else {
      throw new Error('missing component property');
    }
  }

  return (
    <div className="ProductsTable__row">
      { hasColumnTitle(columnsConfig) && (
        <div className="ProductsTable__Cell ProductsTable__Cell_name">
          { hasColumnImage(columnsConfig) && (
            <Image
              src={productData.product.image.src}
              width={70}
              height={70}
              alt={productData.product.name}
            />
          )}
          { productData.product.name }
        </div>
      )}
      { hasColumnPrice(columnsConfig) && (
        <div className="ProductsTable__Cell ProductsTable__Cell_price">
          {`${getFormatCost(productData.product.cost)} ${SYMBOL_RUB}`}
        </div>
      )}
      { hasColumnCounter(columnsConfig) && (
        <div className="ProductsTable__Cell ProductsTable__Cell_counter">
          <Counter
            className=""
            count={productData.count}
            onIncrease={() => handlerProperty(onIncrease, productData.product.id)}
            onDecrease={() => handlerProperty(onDecrease, productData.product.id)}
          />
        </div>
      )}
      { hasColumnCount(columnsConfig) && (
        <div className="ProductsTable__Cell ProductsTable__Cell_count">
          {productData.count}
        </div>
      )}
      { hasColumnSumPrice(columnsConfig) && (
        <div className="ProductsTable__Cell ProductsTable__Cell_summ">
          {`${getFormatCost(productData.product.cost * productData.count)} ${SYMBOL_RUB}`}
        </div>
      )}
      { hasColumnDelete(columnsConfig) && (
        <div className="ProductsTable__Cell ProductsTable__Cell_actions">
          <button
            onClick={() => handlerProperty(onDelete, productData.product.id)}
            title="Удалить"
          >
            <CloseIcon />
          </button>
        </div>
      )}
    </div>
  )
}