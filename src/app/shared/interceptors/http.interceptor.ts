import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {AuthService} from "../service/auth.service";
import {TokenService} from "../service/token.service";

const TOKEN_HEADER_KEY = 'x-access-token';

@Injectable()
export class ApiCallInterceptor implements HttpInterceptor {
  /*
    private isRefreshing = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  */

  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenService: TokenService,
  ) {
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const accessToken = this.tokenService.getAccessToken();
    let authReq = this.setContentType(request);
    if (accessToken != null) {
      authReq = this.addTokenHeader(request, accessToken);
    }

    return next.handle(authReq).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && !authReq.url.includes('wb-admin/login') && error.status === 401) {
        this.authService.signOut();
        //return this.handle401Error(authReq, next);
        return throwError(() => new Error(error.message));
      }

      return throwError(error);
    }));
  }

  /*private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      const token = this.tokenService.getRefreshToken();

      if (token)
        return this.authService.refreshToken(token).pipe(
          switchMap((token: any) => {
            this.isRefreshing = false;

            this.tokenService.saveToken(token);
            this.refreshTokenSubject.next(token);

            return next.handle(this.addTokenHeader(request, token));
          }),
          catchError((err) => {
            this.isRefreshing = false;

            this.tokenService.signOut();
            return throwError(err);
          })
        );
    }
  }*/

  private addTokenHeader(request: HttpRequest<any>, token: string) {
    return request.clone({headers: request.headers.set(TOKEN_HEADER_KEY, token)});
  }

  private setContentType(request: HttpRequest<any>) {
    return request.clone({headers: request.headers.set('Content-Type', 'application/json')});
  }
}
