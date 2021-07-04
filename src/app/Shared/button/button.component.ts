import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ButtonEnum } from "./button.enum";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"],
})
export class ButtonComponent implements OnInit {
  @Input() buttonLabel: string;
  @Input() buttonType: ButtonEnum;
  @Output() buttonClicked = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  emitAction(): void {
    this.buttonClicked.emit(true);
  }
}
