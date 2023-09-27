import { Component } from '@angular/core';
import {AdminShowcaseService} from "../admin-showcase.service";

@Component({
  selector: 'app-showcase-form',
  templateUrl: './showcase-form.component.html',
  styleUrls: ['./showcase-form.component.scss']
})
export class ShowcaseFormComponent {
  constructor(public adminShowcaseService: AdminShowcaseService) {
  }
}
