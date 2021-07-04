import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material/material.module";
import { SnackBarComponent } from "./snack-bar/snack-bar.component";
import { WarningDialogComponent } from "./warning-dialog/warning-dialog.component";
import { ButtonComponent } from "./button/button.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductFormComponent } from "./product-form/product-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoadingSkeletonComponent } from "./loading-skeleton/loading-skeleton.component";
import { SearchProductPipe } from "./../Shared/search-product.pipe";

const COMPONENT = [
  SnackBarComponent,
  WarningDialogComponent,
  ButtonComponent,
  ProductListComponent,
  ProductFormComponent,
  LoadingSkeletonComponent,
  SearchProductPipe,
];

@NgModule({
  declarations: COMPONENT,
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: COMPONENT,
})
export class SharedModule {}
