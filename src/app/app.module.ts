import {NgModule} from '@angular/core';
import {BrowserModule, Meta, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {SlickCarouselModule} from "ngx-slick-carousel";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {ApiCallInterceptor} from "./shared/interceptors/http.interceptor";
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import {CommonModule, registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzUploadModule} from "ng-zorro-antd/upload";

registerLocaleData(en);



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    NzUploadModule,
    CommonModule
  ],

  providers: [provideClientHydration(), Meta, {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiCallInterceptor,
    multi: true,
  }, { provide: NZ_I18N, useValue: en_US },],
  bootstrap: [AppComponent]
})
export class AppModule {
}
