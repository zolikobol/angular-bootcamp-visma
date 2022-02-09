import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CatalogDetailComponent } from "./components/catalog-detail/catalog-detail.component";
import { CatalogListComponent } from "./components/catalog-list/catalog-list.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "list",
  },
  {
    path: "detail/:id",
    component: CatalogDetailComponent,
  },
  {
    path: "list",
    component: CatalogListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule {}
