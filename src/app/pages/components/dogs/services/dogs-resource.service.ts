import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DogsResponseModel } from "../models/dog.model";

@Injectable({
  providedIn: "root",
})
export class DogsResourceService {
  URL = "https://dog.ceo/api/breeds/image/random";
  constructor(private httpClient: HttpClient) {}

  getDogs(count = 10): Observable<DogsResponseModel> {
    return this.httpClient.get<DogsResponseModel>(`${this.URL}/${count}`);
  }
}
