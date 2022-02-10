import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "angular-bootcamp-visma";
  sessionId = "_" + Math.random().toString(36).substr(2, 9);
  constructor() {
    if (!localStorage.getItem("userSessionId")) {
      localStorage.setItem("userSessionId", this.sessionId);
    }
  }
}
