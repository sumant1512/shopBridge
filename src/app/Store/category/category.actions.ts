import { Action } from "@ngrx/store";

export enum CategoryActions {
  FETCH_CATEGORIES = "[Category] Fetch Categories",
  FETCHED_CATEGORIES = "[Category] Fetched Categories",
}

export class FetchCategories implements Action {
  readonly type = CategoryActions.FETCH_CATEGORIES;
}

export class FetchedCategories implements Action {
  readonly type = CategoryActions.FETCHED_CATEGORIES;
  constructor(public payload: string[]) {}
}

export type CategoryActionsUnion = FetchCategories | FetchedCategories;
