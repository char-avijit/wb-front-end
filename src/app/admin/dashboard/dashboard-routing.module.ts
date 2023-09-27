import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {TestimonialComponent} from "./testimonial/testimonial.component";
import {ShowcaseComponent} from "./showcase/showcase.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'testimonial',
    component: TestimonialComponent
  },
  {
    path: 'showcase',
    component: ShowcaseComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
