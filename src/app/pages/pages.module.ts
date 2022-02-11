import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { CartComponent } from "./components/cart/cart.component";
import { ProductComponent } from "./components/product/product.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { DogsComponent } from './components/dogs/dogs.component';

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    CartComponent,
    ProductComponent,
    DogsComponent,
  ],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, FormsModule],
  exports: [HomeComponent, NotFoundComponent, CartComponent, ProductComponent, DogsComponent],
})
export class PagesModule {}
