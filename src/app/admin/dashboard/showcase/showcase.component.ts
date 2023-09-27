import { Component } from '@angular/core';
import {AdminShowcaseService} from "./admin-showcase.service";

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent {
  constructor(public adminShowcaseService: AdminShowcaseService) {
  }
}
