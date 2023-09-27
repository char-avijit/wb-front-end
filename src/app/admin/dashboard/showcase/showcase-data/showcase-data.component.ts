import {Component, OnInit} from '@angular/core';
import {AdminShowcaseService} from "../admin-showcase.service";

@Component({
  selector: 'app-showcase-data',
  templateUrl: './showcase-data.component.html',
  styleUrls: ['./showcase-data.component.scss']
})
export class ShowcaseDataComponent implements OnInit{
  constructor(public adminShowcaseService: AdminShowcaseService) {
  }
  ngOnInit(): void {
    this.adminShowcaseService.getShowCases().then(r => {
    });
  }
}
