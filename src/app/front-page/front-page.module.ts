import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FrontPageRoutingModule} from './front-page-routing.module';
import {HomeComponent} from './home/home.component';
import {HeroComponent} from './home/hero/hero.component';
import {ProjectsComponent} from './home/projects/projects.component';
import {AboutUsComponent} from './home/about-us/about-us.component';
import {TestimonialComponent} from './home/testimonial/testimonial.component';
import {AboutUsModule} from "./home/about-us/about-us.module";
import {ComponentsModule} from "../shared/components/components.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    ProjectsComponent,
    AboutUsComponent,
    TestimonialComponent,
  ],
  imports: [
    CommonModule,
    FrontPageRoutingModule,
    AboutUsModule,
    NgOptimizedImage,
    ComponentsModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class FrontPageModule {
}
