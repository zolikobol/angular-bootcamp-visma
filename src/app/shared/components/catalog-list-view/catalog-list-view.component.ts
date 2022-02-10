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
  @Input() image: string;
  @Output() onListViewClick = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onItemClick(): void {
    this.onListViewClick.emit(this.id);
  }
}
