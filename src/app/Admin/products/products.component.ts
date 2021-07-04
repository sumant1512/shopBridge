import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ButtonEnum } from "src/app/Shared/button/button.enum";
import { ProductFormComponent } from "src/app/Shared/product-form/product-form.component";
import { SnackbarService } from "src/app/Shared/Services/snackbar.service";
import { WarningDialogComponent } from "src/app/Shared/warning-dialog/warning-dialog.component";
import { CategoryFacade } from "src/app/Store/category/category.facade";
import { ProductListType } from "src/app/Store/products/interfaces/product-list.interface";
import { ProductFacade } from "src/app/Store/products/product.facade";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  private subscription: Subscription = new Subscription();

  productList: ProductListType[];
  buttonEnum = ButtonEnum;
  constructor(
    private productFacade: ProductFacade,
    private categoryFacade: CategoryFacade,
    private router: Router,
    public dialog: MatDialog,
    private snackBarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.categoryFacade.fetchCategory();
    this.productFacade.fetchProduct();
    this.getProductListFromStore();
  }

  getProductListFromStore(): void {
    this.subscription.add(
      this.productFacade.getProducts.subscribe((response) => {
        this.productList = response;
      })
    );
  }

  product(isUpdate: boolean, productDetails?: ProductListType): void {
    const dialogRef = this.dialog.open(ProductFormComponent, {
      width: "500px",
      data: {
        productDetails: isUpdate ? productDetails : "",
        formHeading: isUpdate ? "Edit Product" : "Add Product",
        formButton: isUpdate ? "Update" : "Add",
        isUpdate: isUpdate,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && isUpdate) {
        if (!result.id) {
          this.snackBarService.openSnackBar(
            "There is some issue with this product. Please try after some time"
          );
        } else {
          this.productFacade.updateProduct(result);
        }
      } else if (result && !isUpdate) {
        if (
          result.title &&
          result.description &&
          result.price &&
          result.category &&
          result.image
        ) {
          this.productFacade.addProduct(result);
        }
      }
    });
  }

  deleteProduct(productId: number): void {
    const dialogRef = this.dialog.open(WarningDialogComponent, {
      width: "500px",
      data: {
        id: productId,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.productFacade.deleteProduct(productId);
      }
    });
  }

  viewProduct(productId: number) {
    productId
      ? this.router.navigate(["/product"], {
          queryParams: {
            id: productId,
          },
          queryParamsHandling: "merge",
        })
      : this.router.navigate(["/product"]);
  }
}
