import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { CartModel } from "../../catalog/models/cart.model";
import { ProductModel } from "../../catalog/models/product.model";
import { CartResourceService } from "../../catalog/services/cart-resource.service";
import { ProductResourceService } from "../../catalog/services/product-resource.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  product: ProductModel;
  productAmount: number = 1;
  cart: CartModel | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productResourceService: ProductResourceService,
    private cartResourceService: CartResourceService
  ) {}

  ngOnInit(): void {
    const sessionId = localStorage.getItem("userSessionId");
    this.cartResourceService
      .getCart(sessionId)
      .subscribe((cart: CartModel[]) => {
        if (cart.length === 0) {
          this.cart = {
            userSessionId: sessionId,
            products: [],
          };
        } else {
          this.cart = cart[0];
        }
      });

    this.activatedRoute.params
      .pipe(
        switchMap((params) => this.productResourceService.getById(params["id"]))
      )
      .subscribe((product: ProductModel) => {
        this.product = product;
      });
  }

  goBack(): void {
    window.history.back();
  }

  onProductAddedToCart(): void {
    this.cart.products.push(this.product);
    this.cartResourceService
      .addProductToCart(this.cart)
      .subscribe((cart: CartModel) => {
        console.log(cart);
      });
  }
}
