import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

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
