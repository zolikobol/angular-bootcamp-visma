import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CartComponent } from "./pages/components/cart/cart.component";
import { DogsComponent } from "./pages/components/dogs/dogs.component";
import { HomeComponent } from "./pages/components/home/home.component";
import { NotFoundComponent } from "./pages/components/not-found/not-found.component";
import { ProductComponent } from "./pages/components/product/product.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "catalog",
    loadChildren: () =>
      import("./pages/catalog/catalog.module").then((m) => m.CatalogModule),
  },
  {
    path: "cart",
    component: CartComponent,
  },
  {
    path: "product/:id",
    component: ProductComponent,
  },
  {
    path: "order",
    loadChildren: () =>
      import("./pages/order/order.module").then((m) => m.OrderModule),
  },
  {
    path: "dogs",
    component: DogsComponent,
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
