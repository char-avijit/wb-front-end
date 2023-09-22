import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LayoutComponent} from "../shared/components/layout/layout.component";
import {ProjectsComponent} from "./projects/projects.component";
import {ContactComponent} from "./contact/contact.component";
import {ProjectComponent} from "./project/project.component";

const childrenRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'contact-us',
    component: ContactComponent,
  },
  {
    path: 'p/:project-slug',
    component: ProjectComponent,

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
export class ClintSideRoutingModule {
}
