import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "../service/auth.service";
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  const oauthService: AuthService = inject(AuthService);

  if (oauthService.isAuthenticated()) {
    return true;
  }
  return inject(Router).createUrlTree(["/wb-admin",]);
};
