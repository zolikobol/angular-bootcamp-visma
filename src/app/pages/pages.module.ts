import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { CartComponent } from "./components/cart/cart.component";
import { ProductComponent } from "./components/product/product.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    CartComponent,
    ProductComponent,
  ],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports: [HomeComponent, NotFoundComponent, CartComponent, ProductComponent],
})
export class PagesModule {}
