import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-sub-newsletter',
  templateUrl: './sub-newsletter.component.html',
  styleUrls: ['./sub-newsletter.component.scss'],
})
export class SubNewsletterComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
