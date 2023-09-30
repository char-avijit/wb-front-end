import {Component, signal} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {catchError, tap, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {NzMessageService} from "ng-zorro-antd/message";
import {environment} from "../../../../environments/environment";
const BASE_URL = environment.apiUrl;
@Component({
  selector: 'app-sub-newsletter',
  templateUrl: './sub-newsletter.component.html',
  styleUrls: ['./sub-newsletter.component.scss'],
})
export class SubNewsletterComponent {
  constructor(private http: HttpClient, private msg: NzMessageService,) {
  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  async sendEmail() {
    if (!this.emailFormControl.valid) {
      this.msg.error('something wrong! please check your inputs');
    } else {
      const res = await this.http
        .post(BASE_URL + 'mail/subscribe', {
          email: this.emailFormControl.value,
        })
        .pipe(
          tap((res: any) => {
            return res;
          }),
          catchError((err, caught) => {
            this.msg.error('something wrong! please check your inputs');
            return throwError(() => new Error(err.error.message));
          })
        );
      res.subscribe((value) => {
        this.msg.success("thanks for subscribe");
      },error => {
        this.msg.error('something wrong! please check your inputs');
      })
    }

  }
}
