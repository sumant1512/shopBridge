import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { SnackbarService } from "src/app/Shared/Services/snackbar.service";
import { AddProductType } from "../interfaces/add-product.interface";
import { ProductListType } from "../interfaces/product-list.interface";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(
    private http: HttpClient,
    private snackbarService: SnackbarService
  ) {}

  addProduct(productDetails: AddProductType): Observable<any> {
    const addProductUrl = "https://fakestoreapi.com/products";
    return this.http.post<any>(addProductUrl, productDetails).pipe(
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
    const fetchProductsUrl = "https://fakestoreapi.com/products";
    return this.http.get<any>(fetchProductsUrl).pipe(
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
    const deleteProductUrl =
      "https://fakestoreapi.com/products/" + productDetails.id;
    return this.http
      .put<any>(deleteProductUrl, {
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
    const deleteProductUrl = "https://fakestoreapi.com/products/" + productId;
    return this.http.delete<any>(deleteProductUrl).pipe(
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
