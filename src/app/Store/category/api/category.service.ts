import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { SnackbarService } from "src/app/Shared/Services/snackbar.service";
import { AppConfigurations } from "src/assets/config";
import { ApiType } from "src/assets/config.type";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  apiUrls: ApiType = AppConfigurations.api;
  
  constructor(
    private http: HttpClient,
    private snackbarServices: SnackbarService
  ) {}

  getCategories(): Observable<string[]> {
    return this.http.get<any>(this.apiUrls.getCategoryListUrl).pipe(
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
