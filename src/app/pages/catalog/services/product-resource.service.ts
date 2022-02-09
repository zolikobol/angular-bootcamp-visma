import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductModel } from "../models/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductResourceService {
  URL = "http://localhost:3000";
  constructor(private httpClient: HttpClient) {}

  getByCatalogId(catalogId: number): Observable<ProductModel[]> {
    return this.httpClient.get<ProductModel[]>(`${this.URL}/products`, {
      params: {
        catalogId: catalogId.toString(),
      },
    });
  }

  getById(id: number): Observable<ProductModel> {
    return this.httpClient.get<ProductModel>(`${this.URL}/products/${id}`);
  }
}
