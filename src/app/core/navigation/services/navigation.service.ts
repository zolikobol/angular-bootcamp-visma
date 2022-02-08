import { Injectable } from "@angular/core";
import { NavigationItemsEnum } from "../enums/navigation.enum";
import { NavigationMenuItemModel } from "../models/navigation.model";

@Injectable({
  providedIn: "root",
})
export class NavigationService {
  getMenuItems(): NavigationMenuItemModel[] {
    return [
      {
        name: NavigationItemsEnum.HOME,
        link: "",
      },
      {
        name: NavigationItemsEnum.CATALOG,
        link: "catalog",
      },
      {
        name: NavigationItemsEnum.CART,
        link: "cart",
      },
      {
        name: NavigationItemsEnum.ORDER,
        link: "order",
      },
    ];
  }
}
