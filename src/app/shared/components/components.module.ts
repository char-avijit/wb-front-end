import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductCardComponent } from './product-card/product-card.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    ProductCardComponent
  ],
  exports: [
    ProductCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
