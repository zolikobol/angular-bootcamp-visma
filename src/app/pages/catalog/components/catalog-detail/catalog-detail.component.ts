import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductResourceService } from "../../services/product-resource.service";
import { switchMap } from "rxjs/operators";
import { ProductModel } from "../../models/product.model";
import { Observable } from "rxjs";

@Component({
  selector: "app-catalog-detail",
  templateUrl: "./catalog-detail.component.html",
  styleUrls: ["./catalog-detail.component.scss"],
})
export class CatalogDetailComponent implements OnInit {
  catalogId: number;
  products: Observable<ProductModel[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productResourceService: ProductResourceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.products = this.activatedRoute.params.pipe(
      switchMap((params) =>
        this.productResourceService.getByCatalogId(params["id"])
      )
    );
  }

  goBack(): void {
    window.history.back();
  }

  onProductClick(id: number): void {
    this.router.navigate(["product", id]);
  }
}
