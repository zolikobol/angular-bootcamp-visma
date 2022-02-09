import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CatalogModel } from "../models/catalog.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CatalogResourceService {
  URL = "http://localhost:3000";
  constructor(private httpClient: HttpClient) {}

  get(): Observable<CatalogModel[]> {
    return this.httpClient.get<CatalogModel[]>(`${this.URL}/catalog`);
  }
}
