import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-wrapper",
  templateUrl: "./page-wrapper.component.html",
  styleUrls: ["./page-wrapper.component.scss"],
})
export class PageWrapperComponent {
  constructor() {}

  goBack(): void {
    window.history.back();
  }
}
