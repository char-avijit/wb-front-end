import { Component } from '@angular/core';
import {AdminTestimonialService} from "../admin-testimonial.service";

@Component({
  selector: 'app-testimonial-form',
  templateUrl: './testimonial-form.component.html',
  styleUrls: ['./testimonial-form.component.scss']
})
export class TestimonialFormComponent {
  constructor(public testimonialService: AdminTestimonialService) {
    console.log(this.testimonialService.isVisibleForm());
  }
  visible = this.testimonialService.isVisibleForm();
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
