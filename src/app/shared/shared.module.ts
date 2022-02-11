import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RightSideWidgetComponent } from "./components/right-side-widget/right-side-widget.component";
import { CatalogListViewComponent } from "./components/catalog-list-view/catalog-list-view.component";
import { ShortDescriptionPipe } from "./pipes/short-description.pipe";
import { PageWrapperComponent } from "./components/page-wrapper/page-wrapper.component";
import { TextInputComponent } from "./components/text-input/text-input.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    RightSideWidgetComponent,
    CatalogListViewComponent,
    ShortDescriptionPipe,
    PageWrapperComponent,
    TextInputComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    RightSideWidgetComponent,
    CatalogListViewComponent,
    ShortDescriptionPipe,
    PageWrapperComponent,
    TextInputComponent,
  ],
})
export class SharedModule {}
