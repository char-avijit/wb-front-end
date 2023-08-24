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
import {RouterOutlet} from "@angular/router";


@NgModule({
  declarations: [
    NotFoundComponent,
    ProductCardComponent,
    SubNewsletterComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent
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
  ]
})
export class ComponentsModule {
}
