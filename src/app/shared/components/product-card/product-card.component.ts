import {Component, Input} from '@angular/core';
import {ProductCardInput} from "../../interfaces/common";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() data!: ProductCardInput;
}
