import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { SnackbarService } from "src/app/Shared/Services/snackbar.service";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  constructor(
    private http: HttpClient,
    private snackbarServices: SnackbarService
  ) {}

  getCategories(): Observable<string[]> {
    const getCategoriesUrl = "https://fakestoreapi.com/products/categories";
    return this.http.get<any>(getCategoriesUrl).pipe(
      map((response) => {
        if (response) {
          return response;
        }
      }),
      catchError((error) => {
        this.snackbarServices.openSnackBar(error.statusText);
        return throwError(error);
      })
    );
  }
}
