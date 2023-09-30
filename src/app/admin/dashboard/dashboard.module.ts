import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {TestimonialComponent} from "./testimonial/testimonial.component";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from "@angular/material/table";
import {DataTableComponent} from './testimonial/data-table/data-table.component';
import {TestimonialFormComponent} from './testimonial/testimonial-form/testimonial-form.component';
import {NzDrawerModule} from "ng-zorro-antd/drawer";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzUploadModule} from "ng-zorro-antd/upload";
import {BrowserModule} from "@angular/platform-browser";
import { NzIconModule } from 'ng-zorro-antd/icon';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ShowcaseComponent } from './showcase/showcase.component';
import { ShowcaseFormComponent } from './showcase/showcase-form/showcase-form.component';
import { ShowcaseDataComponent } from './showcase/showcase-data/showcase-data.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { CategoryComponent } from './category/category.component';
import { CategoryFormComponent } from './category/category-form/category-form.component';
import { CategoryDataComponent } from './category/category-data/category-data.component';


@NgModule({
  declarations: [
    TestimonialComponent,
    DataTableComponent,
    TestimonialFormComponent,
    ShowcaseComponent,
    ShowcaseFormComponent,
    ShowcaseDataComponent,
    SubscribersComponent,
    CategoryComponent,
    CategoryFormComponent,
    CategoryDataComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    NzDrawerModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzDatePickerModule,
    NzButtonModule,
    NzDividerModule,
    NzTableModule,
    NzUploadModule,
    NzIconModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage,

  ]
})
export class DashboardModule {
}
