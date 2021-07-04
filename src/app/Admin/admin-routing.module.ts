import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductsComponent } from "./products/products.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "add-products",
    pathMatch: "full",
  },
  {
    path: "products",
    component: ProductsComponent,
  },
  {
    path: "product",
    component: ProductDetailsComponent,
    children: [{ path: ":id", component: ProductDetailsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
