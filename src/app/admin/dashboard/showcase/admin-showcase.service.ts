import {Injectable, signal} from '@angular/core';
import {catchError, tap, throwError} from "rxjs";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Testimonial} from "../../../shared/interfaces/testimonial";
import {ShowCase} from "../../../shared/interfaces/show-case";

const BASE_URL = environment.apiUrl;
const SERVICE_URL = 'showcase';

@Injectable({
  providedIn: 'root'
})
export class AdminShowcaseService {

  constructor(private http: HttpClient,) {
  }

  showCases = signal<ShowCase[]>([]);
  isLoading = signal(false);
  activePage = signal(0);
  totalShowcase = signal(0);

  async getShowCases(arg: { pageNo?: number, limitPerPage?: number } = {
    pageNo: 1,
    limitPerPage: 10
  }) {
    this.isLoading.set(true);
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
        this.totalShowcase.set(value.count);
        this.showCases.set(value.results);
        this.isLoading.set(false);
      }
    );
    return res;
  }

  async paginateTo(index: number): Promise<void> {
    await this.getShowCases({pageNo: index, limitPerPage: 10});
  }

  deleteTestimonial(id: number) {
    const res = this.http
      .delete(BASE_URL + SERVICE_URL + '/' + id,)
      .pipe(
        tap((res: any) => {
          return res;
        }),
        catchError((err, caught) => {
          return throwError(() => new Error(err.error.message));
        })
      );

    res.subscribe(value => {
      this.getShowCases({pageNo: this.activePage(), limitPerPage: 10}).then(r => {
      });
    });
  }


  isVisibleForm = signal(false);
  editTestimonialData = signal<ShowCase | null>(null);
  openForm(editData?: ShowCase): void {
    if (editData) {
      this.editTestimonialData.set(editData);
    } else {
      this.editTestimonialData.set(null);
    }
    this.isVisibleForm.set(true);
  }

  closeForm(): void {
    this.editTestimonialData.set(null);
    this.isVisibleForm.set(false);
  }

  loading = signal(false);
}
