import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/components/home/home.component";
import { NotFoundComponent } from "./pages/components/not-found/not-found.component";

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
  // {
  //   path: "cart",
  // },
  // {
  //   path: "orders",
  // },
  {
    path: "**",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
