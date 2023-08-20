import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ImageComponent} from "./image/image.component";
import {InfoComponent} from "./info/info.component";


@NgModule({
  declarations: [
    ImageComponent,
    InfoComponent
  ],
  exports: [
    ImageComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ]
})
export class AboutUsModule {
}
