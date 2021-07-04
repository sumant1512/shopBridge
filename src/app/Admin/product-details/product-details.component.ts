import { Location } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { ButtonEnum } from "src/app/Shared/button/button.enum";
import { ProductListType } from "src/app/Store/products/interfaces/product-list.interface";
import { ProductFacade } from "src/app/Store/products/product.facade";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  buttonEnum = ButtonEnum.Primary;
  selectedProductDetails: ProductListType;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productFacade: ProductFacade,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.productFacade.fetchProduct();
    this.getIdOfSelectedProductfromQueryParams();
  }

  getIdOfSelectedProductfromQueryParams(): void {
    this.subscription.add(
      this.activatedRoute.queryParams.subscribe((queryParams) => {
        this.getSelectedProductDetails(queryParams.id);
      })
    );
  }

  getSelectedProductDetails(productId: string): void {
    this.subscription.add(
      this.productFacade
        .getProductsDetailsForSelectedProduct(productId)
        .subscribe((response) => {
          this.selectedProductDetails = response[0];
        })
    );
  }

  back(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
