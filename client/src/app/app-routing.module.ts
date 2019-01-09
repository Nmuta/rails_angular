import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VehiclesComponent} from "./vehicles/vehicles.component";
import {FabricsComponent} from "./fabrics/fabrics.component";
import {FoodsComponent} from "./foods/foods.component";


const routes: Routes = [
  {path: "vehicles", component: VehiclesComponent},
  {path: "foods", component: FoodsComponent},
  {path: "fabrics", component: FabricsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
