import {inject, Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {TokenService} from "./token.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {AuthPayload, LoginRes} from "../interfaces/auth";
import {catchError, Observable, tap, throwError} from "rxjs";

const BASE_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private tokenService: TokenService, private http: HttpClient,) {
  }

  isAuthenticated(): boolean {
    return this.tokenService.getAccessToken() != null;
  }

  async login(loginPayload: AuthPayload): Promise<Observable<LoginRes>> {
    return this.http
      .post(BASE_URL + 'auth/login', loginPayload)
      .pipe(
        tap((res: any) => {
          return res;
        }),
        catchError((err, caught) => {
          return throwError(() => new Error(err.error.message));
        })
      );
  }

  signOut() {
    this.tokenService.removeAccessToken();
    return inject(Router).createUrlTree(["/wb-admin",]);
  }
}
