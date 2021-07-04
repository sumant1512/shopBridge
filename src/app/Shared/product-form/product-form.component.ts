import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { CategoryFacade } from "src/app/Store/category/category.facade";
import { ButtonEnum } from "../button/button.enum";
import { SnackbarService } from "../Services/snackbar.service";
import { productForm } from "./product-form.utils";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.css"],
})
export class ProductFormComponent implements OnInit, OnDestroy {
  productForm: FormGroup;

  formHeading: string;
  formButton: string;
  buttonEnum = ButtonEnum;

  subscriptions: Subscription = new Subscription();

  categoryList: string[];

  hide = true;
  constructor(
    private categoryFacade: CategoryFacade,
    private snackBarService: SnackbarService,
    public dialogRef: MatDialogRef<ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (this.data) {
      this.productForm = productForm();
      this.formHeading = this.data.formHeading;
      this.formButton = this.data.formButton;
      if (this.data.isUpdate) {
        this.productForm.patchValue({
          title: this.data.productDetails.title,
          price: this.data.productDetails.price,
          description: this.data.productDetails.description,
          image: this.data.productDetails.image,
          category: this.data.productDetails.category,
        });
      }
    }
  }

  ngOnInit(): void {
    this.getCategoryListFromStore();
  }

  getCategoryListFromStore(): void {
    this.subscriptions.add(
      this.categoryFacade.getCategories.subscribe((response) => {
        this.categoryList = response;
      })
    );
  }

  get productValidations() {
    return this.productForm.controls;
  }

  productAction(): void {
    if (this.productForm.invalid) {
      this.snackBarService.openSnackBar("Please fill all details");
    } else {
      this.dialogRef.close({
        ...this.productForm.value,
        id: this.data.productDetails.id,
      });
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
