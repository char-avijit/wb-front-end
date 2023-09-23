import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

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


@NgModule({
  declarations: [
    TestimonialComponent,
    DataTableComponent,
    TestimonialFormComponent
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

  ]
})
export class DashboardModule {
}
