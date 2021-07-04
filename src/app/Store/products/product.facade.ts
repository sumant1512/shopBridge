import { Injectable } from "@angular/core";
import { Action, select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "../app.state";
import * as productSelector from "./product.selectors";
import {
  DeleteProduct,
  FetchProducts,
  FetchedProducts,
  AddProduct,
  UpdateProduct,
} from "./product.actions";
import { ProductListType } from "./interfaces/product-list.interface";
import { AddProductType } from "./interfaces/add-product.interface";

@Injectable({ providedIn: "root" })
export class ProductFacade {
  getProducts: Observable<ProductListType[]> = this.store.select(
    productSelector.products
  );

  constructor(private store: Store<AppState>) {}

  getProductsForSelectedCategory(selectedCategory: string): Observable<any> {
    return this.store.pipe(
      select(productSelector.getProductsForSelectedCategory, selectedCategory)
    );
  }

  getProductsDetailsForSelectedProduct(
    selectedProduct: string
  ): Observable<ProductListType[]> {
    return this.store.pipe(
      select(
        productSelector.getProductsDetailsForSelectedProduct,
        selectedProduct
      )
    );
  }

  addProduct(productDetails: AddProductType) {
    this.store.dispatch(new AddProduct(productDetails));
  }

  updateProduct(productDetails: ProductListType) {
    this.store.dispatch(new UpdateProduct(productDetails));
  }

  deleteProduct(productID: number) {
    this.store.dispatch(new DeleteProduct(productID));
  }

  fetchProduct() {
    this.store.dispatch(new FetchProducts());
  }

  fetchedProducts(products: ProductListType[]): Action {
    return new FetchedProducts(products);
  }
}
