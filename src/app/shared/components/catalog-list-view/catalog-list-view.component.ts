import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-catalog-list-view",
  templateUrl: "./catalog-list-view.component.html",
  styleUrls: ["./catalog-list-view.component.scss"],
})
export class CatalogListViewComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() description: string;
  @Input() catalogImage: string;
  @Output() onCatalogListViewClick = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onCatalogClick(): void {
    this.onCatalogListViewClick.emit(this.id);
  }
}
