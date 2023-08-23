import {Component, Input} from '@angular/core';
import {WorkProcessStepInput} from "../../../../shared/interfaces/common";

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent {
  @Input() data!: WorkProcessStepInput
  @Input() isRightSide: boolean = false
}
