import {Injectable, signal} from '@angular/core';
import {catchError, Observable, Observer, tap, throwError} from "rxjs";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ShowCase} from "../../../shared/interfaces/show-case";
import {CategoryService} from "../category/category.service";
import {NzUploadFile} from "ng-zorro-antd/upload";
import {NzMessageService} from "ng-zorro-antd/message";

const BASE_URL = environment.apiUrl;
const SERVICE_URL = 'showcase';

@Injectable({
  providedIn: 'root'
})
export class AdminShowcaseService {

  constructor(private http: HttpClient, private categoryService: CategoryService, protected msg: NzMessageService,) {
  }

  showCases = signal<ShowCase[]>([]);
  isLoading = signal(false);
  activePage = signal(0);
  totalShowcase = signal(0);
  selectedCategory = signal(6);

  addCategory(input: HTMLInputElement): void {
    const value = input.value;
    this.categoryService.createCategory(value);
    this.getCategory();
  }

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

  categories = signal(this.categoryService.categories());

  async getCategory() {
    const res = await this.categoryService.getCategories({pageNo: 1, limitPerPage: 10000});
    res.subscribe(
      value => {
        this.categories.set(value.results);
      }
    );
  }


  /// image upload

  avatarUrl = signal<string | null>(null);
  avatarUrlKeys:string[] = [];

  beforeUpload(file: NzUploadFile, _fileList: NzUploadFile[]): Observable<boolean> {
    return new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
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
    //console.log(img);
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: NzUploadFile }): void {
    console.log(this.avatarUrlKeys);
    switch (info.file.status) {
      case 'uploading':
        this.loading.set(true);
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading.set(false);
          this.avatarUrl.set(img);
          this.avatarUrlKeys.push(info.file.response.key);
        });
        break;
      case 'error':
        this.msg.error('Network error');
        this.loading.set(false);
        break;
    }
  }

  tagValue = [];
}
