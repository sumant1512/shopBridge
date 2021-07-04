import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { CategoryService } from "./api/category.service";
import { CategoryActions, CategoryActionsUnion } from "./category.actions";
import { CategoryFacade } from "./category.facade";

@Injectable()
export class CategoryEffects {
  fetchCategory$ = createEffect(() =>
    this.action$.pipe(
      ofType(CategoryActions.FETCH_CATEGORIES),
      mergeMap(() =>
        this.categoryService.getCategories().pipe(
          map((categories: string[]) => {
            return this.categoryFacade.fetchedCategories(categories);
          })
        )
      )
    )
  );

  constructor(
    private action$: Actions<CategoryActionsUnion>,
    private categoryService: CategoryService,
    private categoryFacade: CategoryFacade
  ) {}
}
