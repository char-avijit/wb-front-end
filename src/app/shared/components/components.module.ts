import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotFoundComponent} from './not-found/not-found.component';
import {ProductCardComponent} from './product-card/product-card.component';
import {SubNewsletterComponent} from './sub-newsletter/sub-newsletter.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatRippleModule} from "@angular/material/core";
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";


@NgModule({
  declarations: [
    NotFoundComponent,
    ProductCardComponent,
    SubNewsletterComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    AdminLayoutComponent
  ],
  exports: [
    ProductCardComponent,
    SubNewsletterComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    RouterOutlet,
    MatRippleModule,
    RouterLink,
    MatSidenavModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzIconModule,
  ]
})
export class ComponentsModule {
}
