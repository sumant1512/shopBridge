import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from "./admin-routing.module";
import { SharedModule } from "../Shared/shared.module";
import { MaterialModule } from "../material/material.module";
import { ProductsComponent } from "./products/products.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

@NgModule({
  declarations: [ProductsComponent, ProductDetailsComponent],
  imports: [CommonModule, AdminRoutingModule, SharedModule, MaterialModule],
  exports: [ProductsComponent, ProductDetailsComponent],
})
export class AdminModule {}
