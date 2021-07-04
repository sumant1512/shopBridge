import { FormGroup, FormControl, Validators } from "@angular/forms";

export function productForm(): FormGroup {
  return new FormGroup({
    title: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    image: new FormControl("", Validators.required),
    category: new FormControl("", Validators.required),
  });
}
