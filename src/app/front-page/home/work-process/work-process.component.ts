import { Component } from '@angular/core';
import {WorkProcessStepInput} from "../../../shared/interfaces/common";

@Component({
  selector: 'app-work-process',
  templateUrl: './work-process.component.html',
  styleUrls: ['./work-process.component.scss']
})
export class WorkProcessComponent {
  data:WorkProcessStepInput = {
    title: 'ddd',
    description: 'Less Doing, More Living was a conference about productivity and entrepreneurship hosted by Ari Meisel, author of two bestselling books: “The Art of Less Doing” and “The Replaceable Founder”.',
    image: 'assets/images/process.png',
    readMoreLink: 'dd'
  }
}
