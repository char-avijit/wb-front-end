import {Component, OnInit, signal} from '@angular/core';
import {ShowCase} from "../../../shared/interfaces/show-case";
import {catchError, tap, throwError} from "rxjs";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Subscriber as ISubscriber, Subscribers,} from "../../../shared/interfaces/subscriber";
const BASE_URL = environment.apiUrl;
const SERVICE_URL = 'mail/subscribe';
@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.scss']
})
export class SubscribersComponent implements OnInit {
  constructor(private http: HttpClient,) {
  }
  ngOnInit(): void {
    this.getSubscribers().then(r => {
    });
  }
  subscribers = signal<ISubscriber[]>([]);
  isLoading = signal(false);
  activePage = signal(0);
  totalSubscribers = signal(0);

  async getSubscribers(arg: { pageNo?: number, limitPerPage?: number } = {
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
        this.totalSubscribers.set(value.count);
        this.subscribers.set(value.results);
        this.isLoading.set(false);
      }
    );
  }

  async paginateTo(index: number): Promise<void> {
    await this.getSubscribers({pageNo: index, limitPerPage: 10});
  }
}
