import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { SnackbarService } from "src/app/Shared/Services/snackbar.service";
import { AppConfigurations } from "src/assets/config";
import { ApiType } from "src/assets/config.type";
import { AddProductType } from "../interfaces/add-product.interface";
import { ProductListType } from "../interfaces/product-list.interface";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  apiUrls: ApiType = AppConfigurations.api;
  constructor(
    private http: HttpClient,
    private snackbarService: SnackbarService
  ) {}

  addProduct(productDetails: AddProductType): Observable<any> {
    return this.http.post<any>(this.apiUrls.addProductUrl, productDetails).pipe(
      map((response) => {
        if (response) {
          this.snackbarService.openSnackBar("Product Added Successully");
          return response;
        }
      }),
      catchError((error) => {
        this.snackbarService.openSnackBar(error.statusText);
        return throwError(error);
      })
    );
  }

  fetchProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrls.getProductListUrl).pipe(
      map((response) => {
        if (response) {
          return response;
        }
      }),
      catchError((error) => {
        this.snackbarService.openSnackBar(error.statusText);
        return throwError(error);
      })
    );
  }

  updateProduct(productDetails: ProductListType): Observable<any> {
    return this.http
      .put<any>(this.apiUrls.updateProductUrl+productDetails.id, {
        title: productDetails.title,
        price: productDetails.price,
        description: productDetails.description,
        image: productDetails.image,
        category: productDetails.category,
      })
      .pipe(
        map((response) => {
          if (response) {
            this.snackbarService.openSnackBar("Product Updated");
            return response;
          }
        }),
        catchError((error) => {
          this.snackbarService.openSnackBar(error.statusText);
          return throwError(error);
        })
      );
  }

  deleteProduct(productId: number): Observable<any> {
    return this.http.delete<any>(this.apiUrls.deleteProductUrl+productId).pipe(
      map((response) => {
        if (response) {
          this.snackbarService.openSnackBar("Product Deleted");
          return response;
        }
      }),
      catchError((error) => {
        this.snackbarService.openSnackBar(error.statusText);
        return throwError(error);
      })
    );
  }
}
