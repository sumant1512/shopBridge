import { Pipe, PipeTransform } from "@angular/core";
import { ProductListType } from "../Store/products/interfaces/product-list.interface";

@Pipe({
  name: "searchProduct",
})
export class SearchProductPipe implements PipeTransform {
  transform(value: ProductListType[], searchedValue: string): unknown {
    if (!value) return null;
    if (!searchedValue) return value;

    searchedValue = searchedValue.toLowerCase();

    return value.filter((data) => {
      return JSON.stringify(data).toLowerCase().includes(searchedValue);
    });
  }
}
