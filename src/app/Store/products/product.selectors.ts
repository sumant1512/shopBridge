import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { ProductListType } from "./interfaces/product-list.interface";

export const products = (state: AppState) => state.Products;

export const getProductsForSelectedCategory = createSelector(
  products,
  (state: any[], selectedCategory: string) => {
    if (state) {
      if (selectedCategory === "all") {
        return state;
      } else {
        return state.filter((product) => product.category === selectedCategory);
      }
    }
  }
);

export const getProductsDetailsForSelectedProduct = createSelector(
  products,
  (state: ProductListType[], productId: string) => {
    if (state) {
      console.log(state);
      console.log(productId);
      return state.filter((product) => product.id === parseInt(productId));
    }
  }
);
