import { Action } from "@ngrx/store";
import { AddProductType } from "./interfaces/add-product.interface";
import { ProductListType } from "./interfaces/product-list.interface";

export enum ProductActions {
  ADD_PRODUCT = "[Product] Add Product",
  UPDATE_PRODUCT = "[Product] Update Product",
  DELETE_PRODUCT = "[Product] Delete Product",
  FETCH_PRODUCTS = "[Product] Fetch Products",
  FETCHED_PRODUCTS = "[Product] Fetched Products",
}

export class AddProduct implements Action {
  readonly type = ProductActions.ADD_PRODUCT;
  constructor(public payload: AddProductType) {}
}

export class UpdateProduct implements Action {
  readonly type = ProductActions.UPDATE_PRODUCT;
  constructor(public payload: ProductListType) {}
}

export class DeleteProduct implements Action {
  readonly type = ProductActions.DELETE_PRODUCT;
  constructor(public payload: number) {}
}

export class FetchProducts implements Action {
  readonly type = ProductActions.FETCH_PRODUCTS;
}

export class FetchedProducts implements Action {
  readonly type = ProductActions.FETCHED_PRODUCTS;
  constructor(public payload: ProductListType[]) {}
}

export type ProductActionsUnion =
  | AddProduct
  | UpdateProduct
  | DeleteProduct
  | FetchProducts
  | FetchedProducts;
