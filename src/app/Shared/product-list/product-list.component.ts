import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Subscription } from "rxjs";
import { CategoryFacade } from "src/app/Store/category/category.facade";
import { ProductListType } from "src/app/Store/products/interfaces/product-list.interface";
import { ProductFacade } from "src/app/Store/products/product.facade";
import { ButtonEnum } from "../button/button.enum";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  private subscriptions: Subscription = new Subscription();
  @Input() productList: ProductListType[];
  @Output() updateProductData = new EventEmitter<ProductListType>();
  @Output() deleteProductData = new EventEmitter<number>();
  @Output() viewProductData = new EventEmitter<number>();

  buttonEnum = ButtonEnum;
  searchCategory: string;
  searchedValue: string;
  categoryList: string[];

  constructor(
    private categoryFacade: CategoryFacade,
    private productFacade: ProductFacade
  ) {}

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

  getProductsForSelectedCategory(): void {
    this.productFacade
      .getProductsForSelectedCategory(this.searchCategory)
      .subscribe((response) => {
        this.productList = response;
      });
  }

  updateProduct(productDetails: ProductListType): void {
    this.updateProductData.emit(productDetails);
  }

  deleteProduct(productId: number): void {
    this.deleteProductData.emit(productId);
  }

  viewProduct(productId: number): void {
    this.viewProductData.emit(productId);
  }
}
