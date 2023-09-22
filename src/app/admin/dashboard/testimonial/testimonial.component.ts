import {Component} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {AdminTestimonialService} from "./admin-testimonial.service";


@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {
  constructor(public testimonialService:AdminTestimonialService) {
  }
}
