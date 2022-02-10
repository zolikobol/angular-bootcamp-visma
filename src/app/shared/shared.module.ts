import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RightSideWidgetComponent } from "./components/right-side-widget/right-side-widget.component";
import { CatalogListViewComponent } from "./components/catalog-list-view/catalog-list-view.component";
import { ShortDescriptionPipe } from './pipes/short-description.pipe';
import { PageWrapperComponent } from './components/page-wrapper/page-wrapper.component';

@NgModule({
  declarations: [RightSideWidgetComponent, CatalogListViewComponent, ShortDescriptionPipe, PageWrapperComponent],
  imports: [CommonModule],
  exports: [RightSideWidgetComponent, CatalogListViewComponent, ShortDescriptionPipe, PageWrapperComponent],
})
export class SharedModule {}
