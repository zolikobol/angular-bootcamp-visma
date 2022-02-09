import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { CartComponent } from "./components/cart/cart.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [HomeComponent, NotFoundComponent, CartComponent],
  imports: [CommonModule],
  exports: [HomeComponent, NotFoundComponent, CartComponent],
})
export class PagesModule {}
