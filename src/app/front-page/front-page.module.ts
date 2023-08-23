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
import { WorkProcessComponent } from './home/work-process/work-process.component';
import { StepComponent } from './home/work-process/step/step.component';
import {SlickCarouselModule} from "ngx-slick-carousel";
import { TestimonialCardComponent } from './home/testimonial/testimonial-card/testimonial-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    ProjectsComponent,
    AboutUsComponent,
    TestimonialComponent,
    WorkProcessComponent,
    StepComponent,
    TestimonialCardComponent,
  ],
    imports: [
        CommonModule,
        FrontPageRoutingModule,
        AboutUsModule,
        NgOptimizedImage,
        ComponentsModule,
        MatIconModule,
        MatButtonModule,
        SlickCarouselModule
    ]
})
export class FrontPageModule {
}
