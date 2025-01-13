import {ProductsTableColumns} from "@/features/ProductsTable/types";

export function hasColumn(column: ProductsTableColumns, columnsConfig: ProductsTableColumns[]): boolean {
  return columnsConfig.indexOf(column) !== -1;
}

export function hasColumnTitle(columnsConfig: ProductsTableColumns[]): boolean {
  return hasColumn(ProductsTableColumns.TITLE, columnsConfig);
}

export function hasColumnImage(columnsConfig: ProductsTableColumns[]): boolean {
  return hasColumn(ProductsTableColumns.IMAGE, columnsConfig)
}

export function hasColumnPrice(columnsConfig: ProductsTableColumns[]): boolean {
  return hasColumn(ProductsTableColumns.PRICE, columnsConfig);
}

export function hasColumnCounter(columnsConfig: ProductsTableColumns[]): boolean {
  return hasColumn(ProductsTableColumns.COUNTER, columnsConfig);
}

export function hasColumnCount(columnsConfig: ProductsTableColumns[]): boolean {
  return hasColumn(ProductsTableColumns.COUNT, columnsConfig);
}

export function hasColumnSumPrice(columnsConfig: ProductsTableColumns[]): boolean {
  return hasColumn(ProductsTableColumns.SUM_PRICE, columnsConfig);
}

export function hasColumnDelete(columnsConfig: ProductsTableColumns[]): boolean {
  return hasColumn(ProductsTableColumns.DELETE, columnsConfig);
}





