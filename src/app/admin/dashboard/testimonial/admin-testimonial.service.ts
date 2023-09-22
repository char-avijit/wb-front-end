import {Injectable, signal} from '@angular/core';
import {catchError, Observable, tap, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Testimonial, Testimonials} from "../../../shared/interfaces/testimonial";
import {environment} from "../../../../environments/environment";

const BASE_URL = environment.apiUrl;
const SERVICE_URL = 'testimonial';

@Injectable({
  providedIn: 'root'
})
export class AdminTestimonialService {

  constructor(private http: HttpClient,) {
  }

  testimonialData = signal<Testimonial[]>([]);
  totalTestimonial = signal(0);
  isDataTableLoading = signal(false);

  async getTestimonials(arg: { pageNo?: number, limitPerPage?: number } = {
    pageNo: 1,
    limitPerPage: 10
  }): Promise<Observable<Testimonials>> {
    this.isDataTableLoading.set(true);
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

  openForm(): void {
    this.isVisibleForm.set(true);
  }

  closeForm(): void {
    this.isVisibleForm.set(false);
  }


}
