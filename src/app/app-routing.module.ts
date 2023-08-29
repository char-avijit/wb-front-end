import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./shared/components/not-found/not-found.component";

const childrenRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./clint-side/clint-side.module').then((m) => m.ClintSideModule),
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
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
