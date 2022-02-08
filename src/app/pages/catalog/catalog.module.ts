import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogListComponent } from './components/catalog-list/catalog-list.component';
import { CatalogDetailComponent } from './components/catalog-detail/catalog-detail.component';


@NgModule({
  declarations: [CatalogListComponent, CatalogDetailComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule
  ],
  exports: [CatalogListComponent, CatalogDetailComponent]
})
export class CatalogModule { }
