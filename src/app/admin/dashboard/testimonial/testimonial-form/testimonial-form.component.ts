import {Component} from '@angular/core';
import {AdminTestimonialService} from "../admin-testimonial.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {FormBuilder, Validators} from "@angular/forms";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-testimonial-form',
  templateUrl: './testimonial-form.component.html',
  styleUrls: ['./testimonial-form.component.scss']
})
export class TestimonialFormComponent {
  constructor(public testimonialService: AdminTestimonialService, private msg: NzMessageService,) {
  }
  fileUploadApi = `${environment.apiUrl}/file`
}
