import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import { CategoryReducer } from "./category/category.reducers";
import { ProductReducer } from "./products/product.reducers";

export const appReducers: ActionReducerMap<AppState> = {
  Categories: CategoryReducer,
  Products: ProductReducer,
};
