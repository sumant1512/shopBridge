import { CategoryActions, CategoryActionsUnion } from "./category.actions";

export const initialCaregoryState: string[] = [];
export function CategoryReducer(
  state = initialCaregoryState,
  action: CategoryActionsUnion
): string[] {
  switch (action.type) {
    case CategoryActions.FETCHED_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
}
