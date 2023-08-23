import {Component} from '@angular/core';
import {Currency} from "../../../shared/enums";
import {ProductCardInput} from "../../../shared/interfaces/common";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  data: ProductCardInput = {
    image: 'assets/images/about.png',
    currency: Currency.AUD,
    price: 3000,
    title: 'this is a test title with log text and lets see what gonna happen',
    location: 'this is location'
  }
}
