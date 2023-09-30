import {Component, signal} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {catchError, tap, throwError} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {NzMessageService} from "ng-zorro-antd/message";

const BASE_URL = environment.apiUrl;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private fb: FormBuilder, private http: HttpClient, private msg: NzMessageService,) {
  }

  sendEmailForm = signal(this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  })) ;

  async sendEmail() {
    if (!this.sendEmailForm().valid) {
      this.msg.error('something wrong! please check your inputs');
    } else {
      const res = await this.http
        .post(BASE_URL + 'mail/send', {
          name: this.sendEmailForm().value.name,
          email: this.sendEmailForm().value.email,
          subject: this.sendEmailForm().value.subject,
          message: this.sendEmailForm().value.message
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
        this.msg.success("thanks! we will contact you soon")
      },error => {
        this.msg.error('something wrong! please check your inputs');
      })
    }

  }
}
