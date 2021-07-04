import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-loading-skeleton",
  templateUrl: "./loading-skeleton.component.html",
  styleUrls: ["./loading-skeleton.component.css"],
})
export class LoadingSkeletonComponent implements OnInit {
  @Input() Cwidth;
  @Input() Cheight;
  @Input() circle: boolean;
  @Input() outline: boolean;

  constructor() {}

  ngOnInit() {}

  getMyStyles() {
    const myStyles = {
      "width.px": this.Cwidth ? this.Cwidth : "",
      "height.px": this.Cheight ? this.Cheight : "",
      "border-radius": this.circle ? "50%" : "",
    };
    return myStyles;
  }
}
