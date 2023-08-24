import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LayoutComponent} from "../shared/components/layout/layout.component";

const childrenRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: childrenRoutes,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontPageRoutingModule {
}
