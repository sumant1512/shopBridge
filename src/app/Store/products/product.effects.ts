import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { ProductService } from "./api/product.service";
import {
  ProductActions,
  ProductActionsUnion,
  FetchProducts,
} from "./product.actions";
import { ProductFacade } from "./product.facade";
import { ProductListType } from "./interfaces/product-list.interface";

@Injectable()
export class ProductEffects {
  addProduct$ = createEffect(() =>
    this.action$.pipe(
      ofType(ProductActions.ADD_PRODUCT),
      mergeMap((action) =>
        this.productService.addProduct(action.payload).pipe(
          map(() => {
            return new FetchProducts();
          })
        )
      )
    )
  );

  updateProduct$ = createEffect(() =>
    this.action$.pipe(
      ofType(ProductActions.UPDATE_PRODUCT),
      mergeMap((action) =>
        this.productService.updateProduct(action.payload).pipe(
          map(() => {
            return new FetchProducts();
          })
        )
      )
    )
  );

  deleteProduct$ = createEffect(() =>
    this.action$.pipe(
      ofType(ProductActions.DELETE_PRODUCT),
      mergeMap((action) =>
        this.productService.deleteProduct(action.payload).pipe(
          map(() => {
            return new FetchProducts();
          })
        )
      )
    )
  );

  fetchProduct$ = createEffect(() =>
    this.action$.pipe(
      ofType(ProductActions.FETCH_PRODUCTS),
      mergeMap(() =>
        this.productService.fetchProducts().pipe(
          map((products: ProductListType[]) => {
            return this.productFacade.fetchedProducts(products);
          })
        )
      )
    )
  );

  constructor(
    private action$: Actions<ProductActionsUnion>,
    private productService: ProductService,
    private productFacade: ProductFacade
  ) {}
}
