import { CategoryActions } from "./category/category.actions";
import { ProductActions } from "./products/product.actions";

export type AppActionsUnion = CategoryActions | ProductActions;
