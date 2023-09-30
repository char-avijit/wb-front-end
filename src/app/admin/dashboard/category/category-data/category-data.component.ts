import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-category-data',
  templateUrl: './category-data.component.html',
  styleUrls: ['./category-data.component.scss']
})
export class CategoryDataComponent implements OnInit {
  constructor(public categoryService: CategoryService) {
  }
  ngOnInit(): void {
    this.categoryService.getCategories().then(r => {
    });
  }
}
