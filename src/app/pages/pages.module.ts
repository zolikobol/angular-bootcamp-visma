import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { CartComponent } from "./components/cart/cart.component";
import { ProductComponent } from "./components/product/product.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    CartComponent,
    ProductComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [HomeComponent, NotFoundComponent, CartComponent, ProductComponent],
})
export class PagesModule {}
