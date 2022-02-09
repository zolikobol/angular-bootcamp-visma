import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CatalogRoutingModule } from "./catalog-routing.module";
import { CatalogListComponent } from "./components/catalog-list/catalog-list.component";
import { CatalogDetailComponent } from "./components/catalog-detail/catalog-detail.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [CatalogListComponent, CatalogDetailComponent],
  imports: [CommonModule, CatalogRoutingModule, SharedModule],
  exports: [CatalogListComponent, CatalogDetailComponent],
})
export class CatalogModule {}
