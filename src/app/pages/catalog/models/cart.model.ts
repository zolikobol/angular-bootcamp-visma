import { ProductModel } from "./product.model";

export interface CartModel {
  userSessionId: string;
  products: ProductModel[];
}
