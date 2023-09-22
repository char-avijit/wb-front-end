import {Component, OnInit} from '@angular/core';
import {AdminTestimonialService} from "../admin-testimonial.service";


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  constructor(public testimonialService: AdminTestimonialService) {
  }

  async paginateTo(index: number): Promise<void> {
    await this.testimonialService.getTestimonials({pageNo: index, limitPerPage: 10});
  }

  ngOnInit(): void {
    this.testimonialService.getTestimonials().then(r => {
    });
  }
}
