import {Component, OnInit, signal} from '@angular/core';
import {AdminShowcaseService} from "../admin-showcase.service";
import {NzSelectSizeType} from 'ng-zorro-antd/select';
import {environment} from "../../../../../environments/environment";
import {PropertyType} from "../../../../shared/interfaces/enums";

@Component({
  selector: 'app-showcase-form',
  templateUrl: './showcase-form.component.html',
  styleUrls: ['./showcase-form.component.scss']
})
export class ShowcaseFormComponent implements OnInit {
  constructor(protected adminShowcaseService: AdminShowcaseService,) {
  }

  fileUploadApi = `${environment.apiUrl}file`;

  listOfItem = signal<string[]>(['jack', 'lucy']);


  listOfOption: Array<{ label: string; value: string }> = [];
  size: NzSelectSizeType = 'large';
  propertyType =  PropertyType;



  ngOnInit(): void {
    this.adminShowcaseService.getCategory().then(r => {
    });
  }
}
