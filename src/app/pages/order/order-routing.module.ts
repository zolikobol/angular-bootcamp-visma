import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OrderDetailComponent } from "./components/order-detail/order-detail.component";
import { OrderListComponent } from "./components/order-list/order-list.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "list",
  },
  {
    path: "list",
    component: OrderListComponent,
  },
  {
    path: "detail",
    component: OrderDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
