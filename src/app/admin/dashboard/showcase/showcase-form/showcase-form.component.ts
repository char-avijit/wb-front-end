import {Component, signal} from '@angular/core';
import {AdminShowcaseService} from "../admin-showcase.service";
import { NzSelectSizeType } from 'ng-zorro-antd/select';
@Component({
  selector: 'app-showcase-form',
  templateUrl: './showcase-form.component.html',
  styleUrls: ['./showcase-form.component.scss']
})
export class ShowcaseFormComponent {
  constructor(public adminShowcaseService: AdminShowcaseService) {
  }
  listOfItem = signal<string[]>(['jack', 'lucy']);


  listOfOption: Array<{ label: string; value: string }> = [];
  size: NzSelectSizeType = 'large';
  tagValue = ['a10', 'c12', 'tag'];
  index = 0;
  addItem(input: HTMLInputElement): void {
    const value = input.value;
    this.listOfItem.mutate(value1 => value1.push(value))
  }
}
