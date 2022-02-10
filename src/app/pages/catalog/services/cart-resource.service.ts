import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CartModel } from "../models/cart.model";
import { ProductModel } from "../models/product.model";

@Injectable({
  providedIn: "root",
})
export class CartResourceService {
  URL = "http://localhost:3000";

  constructor(private httpClient: HttpClient) {}

  addProductToCart(product: ProductModel): Observable<CartModel> {
    return this.httpClient.patch<CartModel>(`${this.URL}/cart`, {
      product,
    });
  }

  getCart(userSessionId: string | null): Observable<CartModel[]> {
    if (userSessionId) {
      return this.httpClient.get<CartModel[]>(`${this.URL}/cart`, {
        params: {
          userSessionId,
        },
      });
    } else {
      return new Observable();
    }
  }
}
