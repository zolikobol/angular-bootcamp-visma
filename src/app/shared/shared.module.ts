import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RightSideWidgetComponent } from "./components/right-side-widget/right-side-widget.component";
import { CatalogListViewComponent } from "./components/catalog-list-view/catalog-list-view.component";
import { ShortDescriptionPipe } from './pipes/short-description.pipe';

@NgModule({
  declarations: [RightSideWidgetComponent, CatalogListViewComponent, ShortDescriptionPipe],
  imports: [CommonModule],
  exports: [RightSideWidgetComponent, CatalogListViewComponent, ShortDescriptionPipe],
})
export class SharedModule {}
