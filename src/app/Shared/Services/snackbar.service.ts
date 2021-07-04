import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackBarComponent } from "../snack-bar/snack-bar.component";

@Injectable({
  providedIn: "root",
})
export class SnackbarService {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(successMessage): void {
    this._snackBar.openFromComponent(SnackBarComponent, {
      horizontalPosition: "center",
      verticalPosition: "top",
      duration: 3 * 1000,
      data: { message: successMessage },
    });
  }
}
