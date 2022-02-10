export interface ProductModel {
  id: number;
  name: string;
  description: string;
  price: number;
  productImage: string;
  catalogId: number;
  sizes?: ProductSizeEnum[];
  accessories?: AccessoriesModel[];
}

enum ProductSizeEnum {
  SIZE_S = "S",
  SIZE_M = "M",
  SIZE_L = "L",
}

export interface AccessoriesModel {
  name: string;
  description: string;
  price: number;
}
