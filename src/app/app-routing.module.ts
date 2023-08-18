import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {NotFoundComponent} from "./shared/components/not-found/not-found.component";

const childrenRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./front-page/front-page.module').then((m) => m.FrontPageModule),
  },
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects.module').then((m) => m.ProjectsModule),
  },
  {
    path: 'wb-admin',
    loadChildren: () => import('./admin-auth/admin-auth.module').then((m) => m.AdminAuthModule),
  }
];

const routes: Routes = [
  {
    path: '',
    children: childrenRoutes,
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
