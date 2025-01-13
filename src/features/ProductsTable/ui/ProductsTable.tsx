'use client';

import {ProductsTableProps} from "../types";
import {ReactNode} from "react";
import {stateProductItem} from "@/app";
import './ProductsTable.scss';
import {
  hasColumnCount,
  hasColumnCounter, hasColumnDelete,
  hasColumnPrice, hasColumnSumPrice,
  hasColumnTitle
} from "@/features/ProductsTable/utils";
import {ProductsTableItem} from "@/features/ProductsTable/ui/ProductsTableItem";

export const ProductsTable = (
  { products, columnsConfig, onIncrease, onDecrease, onDelete }: ProductsTableProps
): ReactNode => {

  return (
    <div className="ProductsTable">
      <div className="ProductsTable__header">
        { hasColumnTitle(columnsConfig) && (
          <div className="ProductsTable__HeaderCell ProductsTable__Cell ProductsTable__Cell_name">Название</div>
        ) }
        { hasColumnPrice(columnsConfig) && (
          <div className="ProductsTable__HeaderCell ProductsTable__Cell ProductsTable__Cell_price">Цена</div>
        ) }
        { hasColumnCount(columnsConfig) && (
          <div className="ProductsTable__HeaderCell ProductsTable__Cell ProductsTable__Cell_count">Кол-во</div>
        ) }
        { hasColumnCounter(columnsConfig) && (
          <div className="ProductsTable__HeaderCell ProductsTable__Cell ProductsTable__Cell_counter">Кол-во</div>
        ) }
        { hasColumnSumPrice(columnsConfig) && (
          <div className="ProductsTable__HeaderCell ProductsTable__Cell ProductsTable__Cell_summ">Стоимость</div>
        ) }
        { hasColumnDelete(columnsConfig) && (
          <div className="ProductsTable__HeaderCell ProductsTable__Cell ProductsTable__Cell_actions"></div>
        ) }
      </div>
      <div className="ProductsTable__body">
        { products.length === 0 && (
          <div>{/* Отображение пустого списка */}</div>
        )}

        { products.map((productData: stateProductItem) => {
          return (
            <ProductsTableItem
              columnsConfig={columnsConfig}
              productData={productData}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              onDelete={onDelete}
            />
          )
        }) }
      </div>
    </div>
  )
}