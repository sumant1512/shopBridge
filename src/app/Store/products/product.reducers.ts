import { ProductActions, ProductActionsUnion } from "./product.actions";
import { ProductListType } from "./interfaces/product-list.interface";

export const initialProductState: ProductListType[] = [];
export function ProductReducer(
  state = initialProductState,
  action: ProductActionsUnion
) {
  switch (action.type) {
    case ProductActions.FETCHED_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
}
