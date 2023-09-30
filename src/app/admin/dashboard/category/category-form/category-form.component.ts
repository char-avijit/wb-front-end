import { Component } from '@angular/core';
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent {
  constructor(public categoryService: CategoryService) {
  }
}
