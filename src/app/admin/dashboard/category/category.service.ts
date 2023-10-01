import {Injectable, signal} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {catchError, tap, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Category, CategoryBody} from "../../../shared/interfaces/category";
import {FormBuilder, Validators} from "@angular/forms";
import {NzMessageService} from "ng-zorro-antd/message";

const BASE_URL = environment.apiUrl;
const SERVICE_URL = 'category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient, private msg: NzMessageService, private fb: FormBuilder) {
  }

  categories = signal<Category[]>([]);
  isLoading = signal(false);
  activePage = signal(0);
  totalCategories = signal(0);

  async getCategories(arg: { pageNo?: number, limitPerPage?: number } = {
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
        this.totalCategories.set(value.count);
        this.categories.set(value.results);
        this.isLoading.set(false);
      }
    );
    return res;
  }

  async paginateTo(index: number): Promise<void> {
    await this.getCategories({pageNo: index, limitPerPage: 10});
  }


  isVisibleForm = signal(false);
  editCategoryData = signal<Category | null>(null);

  openForm(editData?: Category): void {
    if (editData) {
      this.editCategoryData.set(editData);
    } else {
      this.editCategoryData.set(null);
    }
    this.isVisibleForm.set(true);
  }


  closeForm(): void {
    this.editCategoryData.set(null);
    this.isVisibleForm.set(false);
  }

  editCategoryForm = this.fb.group({
    description: ['',],
    name: ['', [Validators.required]]
  });

  submitCategoryForm() {
    if (this.editCategoryForm.valid) {
      if (this.editCategoryData() === null) {
        this.createCategory();
      } else {
        this.updateCategory(this.editCategoryData()!.id);
      }
    } else {
      Object.values(this.editCategoryForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }
  }


  updateCategory(id: number) {
    const body: CategoryBody = {
      name: this.editCategoryForm.value.name ?? '',
      description: this.editCategoryForm.value.description ?? '',
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
      this.getCategories({pageNo: this.activePage(), limitPerPage: 10}).then(r => {
      });
      this.closeForm();
    });
    return res;
  }

  createCategory(name?: string) {
    let body: CategoryBody;
    if(name){
      body = {
        name,
      }
    }else {
      body = {
        name: this.editCategoryForm.value.name ??  '',
        description: this.editCategoryForm.value.description ?? '',
      };
    }
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
      this.getCategories({pageNo: this.activePage(), limitPerPage: 10}).then(r => {
      });
      this.closeForm();
    });
    return res;
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
      this.getCategories({pageNo: this.activePage(), limitPerPage: 10}).then(r => {
      });
    });
  }
}
