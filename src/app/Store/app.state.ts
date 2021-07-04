import { ProductListType } from "./products/interfaces/product-list.interface";

export type AppState = Partial<{
  Categories: string[];
  Products: ProductListType[];
}>;
