import { Injectable } from "@angular/core";
import { Action, select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "../app.state";
import { FetchCategories, FetchedCategories } from "./category.actions";
import * as categorySelector from "./category.selectors";

@Injectable({ providedIn: "root" })
export class CategoryFacade {
  getCategories: Observable<string[]> = this.store.select(
    categorySelector.categories
  );

  constructor(private store: Store<AppState>) {}

  fetchCategory() {
    this.store.dispatch(new FetchCategories());
  }

  fetchedCategories(categories: string[]): Action {
    return new FetchedCategories(categories);
  }
}
