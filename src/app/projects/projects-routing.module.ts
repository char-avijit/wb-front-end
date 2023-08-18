import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AllProjectsComponent} from "./all-projects/all-projects.component";



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'projects'
  },
  {
    path: 'projects',
    component: AllProjectsComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
