import {Injectable, signal} from '@angular/core';
import {catchError, Observable, Observer, tap, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Testimonial, TestimonialBody, Testimonials} from "../../../shared/interfaces/testimonial";
import {environment} from "../../../../environments/environment";
import {NzUploadFile} from "ng-zorro-antd/upload";
import {NzMessageService} from "ng-zorro-antd/message";
import {FormBuilder, Validators} from "@angular/forms";

const BASE_URL = environment.apiUrl;
const SERVICE_URL = 'testimonial';

@Injectable({
  providedIn: 'root'
})
export class AdminTestimonialService {

  constructor(private http: HttpClient, private msg: NzMessageService, private fb: FormBuilder) {
  }

  testimonialData = signal<Testimonial[]>([]);
  totalTestimonial = signal(0);
  activePage = signal(0);
  isDataTableLoading = signal(false);

  async getTestimonials(arg: { pageNo?: number, limitPerPage?: number } = {
    pageNo: 1,
    limitPerPage: 10
  }): Promise<Observable<Testimonials>> {
    this.isDataTableLoading.set(true);
    this.activePage.set(arg.pageNo ?? 1);
    const res = this.http
      .get(BASE_URL + SERVICE_URL + `?pageNo=${arg.pageNo}&limitPerPage=${arg.limitPerPage}`)
      .pipe(
        tap((res: any) => {
          return res;
        }),
        catchError((err, caught) => {
          return throwError(() => new Error(err.error.message));
        })
      );

    res.subscribe(
      value => {
        this.totalTestimonial.set(value.count);
        this.testimonialData.set(value.results);
        this.isDataTableLoading.set(false);
      }
    );
    return res;
  }


  isVisibleForm = signal(false);
  editTestimonialData = signal<Testimonial | null>(null);

  openForm(editData?: Testimonial): void {
    if (editData) {
      this.editTestimonialData.set(editData);
      this.avatarUrl.set(editData.avatar);
      this.avatarUrlKey.set(editData.avatarImageKey);
    } else {
      this.avatarUrl.set(null);
      this.avatarUrlKey.set(null);
      this.editTestimonialData.set(null);
    }
    this.isVisibleForm.set(true);
  }

  closeForm(): void {
    this.avatarUrl.set(null);
    this.avatarUrlKey.set(null);
    this.editTestimonialData.set(null);
    this.isVisibleForm.set(false);
  }

  loading = signal(false);
  avatarUrl = signal<string | null>(null);
  avatarUrlKey = signal<string | null>(null);

  beforeUpload(file: NzUploadFile, _fileList: NzUploadFile[]): Observable<boolean> {
    return new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === "image/svg+xml";
      if (!isJpgOrPng) {
        this.msg.error('You can only upload JPG file!');
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error('Image must smaller than 2MB!');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });
  }

  private getBase64(img: File, callback: (img: string) => void): void {
    console.log(img);
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: NzUploadFile }): void {
    console.log(info.file.status);
    switch (info.file.status) {
      case 'uploading':
        this.loading.set(true);
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading.set(false);
          this.avatarUrl.set(img);
          this.avatarUrlKey.set(info.file.response.key);
        });
        break;
      case 'error':
        this.msg.error('Network error');
        this.loading.set(false);
        break;
    }
  }


  testimonialForm = this.fb.group({
    designation: ['', [Validators.required]],
    message: ['', [Validators.required]],
    name: ['', [Validators.required]]
  });


  submitTestimonialForm() {
    if (this.testimonialForm.valid) {
      if (this.avatarUrlKey() === null) {
        this.msg.error('upload avatar');
      } else {
        if (this.editTestimonialData() === null) {
          this.createTestimonial();
        } else {
          this.updateTestimonial(this.editTestimonialData()!.id);
        }
      }
    } else {
      Object.values(this.testimonialForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }
  }


  updateTestimonial(id: number) {
    const body: TestimonialBody = {
      message: this.testimonialForm.value.message ?? '',
      name: this.testimonialForm.value.name ?? '',
      designation: this.testimonialForm.value.designation ?? '',
      avatar: this.avatarUrl() ?? '',
      avatarImageKey: this.avatarUrlKey() ?? ''
    };

    const res = this.http
      .patch(BASE_URL + SERVICE_URL + '/' + id, body)
      .pipe(
        tap((res: any) => {
          return res;
        }),
        catchError((err, caught) => {
          return throwError(() => new Error(err.error.message));
        })
      );

    res.subscribe(value => {
      this.getTestimonials({pageNo: this.activePage(), limitPerPage: 10}).then(r => {
      });
      this.closeForm();
    });
    return res;
  }

  createTestimonial() {

    const body: TestimonialBody = {
      message: this.testimonialForm.value.message ?? '',
      name: this.testimonialForm.value.name ?? '',
      designation: this.testimonialForm.value.designation ?? '',
      avatar: this.avatarUrl() ?? '',
      avatarImageKey: this.avatarUrlKey() ?? ''
    };
    const res = this.http
      .post(BASE_URL + SERVICE_URL, body)
      .pipe(
        tap((res: any) => {
          return res;
        }),
        catchError((err, caught) => {
          return throwError(() => new Error(err.error.message));
        })
      );

    res.subscribe(value => {
      this.getTestimonials({pageNo: this.activePage(), limitPerPage: 10}).then(r => {
      });
      this.closeForm();
    });
    return res;
  }

}
