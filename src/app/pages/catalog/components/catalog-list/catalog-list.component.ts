import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { CatalogModel } from "../../models/catalog.model";
import { CatalogResourceService } from "../../services/catalog-resource.service";

@Component({
  selector: "app-catalog-list",
  templateUrl: "./catalog-list.component.html",
  styleUrls: ["./catalog-list.component.scss"],
})
export class CatalogListComponent implements OnInit {
  catalogs: Observable<CatalogModel[]> | undefined;
  constructor(
    private catalogResourceService: CatalogResourceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.catalogs = this.catalogResourceService.get();
  }

  onCatalogListViewClick(id: number): void {
    this.router.navigate(["catalog", "detail", id]);
  }
}
