import { Component, OnInit } from "@angular/core";
import { NavigationMenuItemModel } from "./models/navigation.model";
import { NavigationService } from "./services/navigation.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
  navigationItems: NavigationMenuItemModel[] | undefined;

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.navigationItems = this.navigationService.getMenuItems();
  }
}
