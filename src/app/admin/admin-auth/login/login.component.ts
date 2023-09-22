import {Component, OnInit, signal} from '@angular/core';
import {AuthService} from "../../../shared/service/auth.service";
import {Router} from "@angular/router";
import {TokenService} from "../../../shared/service/token.service";
import {FormBuilder, FormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private tokenService: TokenService
  ) {
  }

  ngOnInit(): void {

    if (this.authService.isAuthenticated()) {
      this.router.navigate(['wb-admin/dashboard']).then(r => {});
    }
  }

  isLoading = signal(false);
  loginForm: any = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', Validators.required],
  });

  async loginNow(): Promise<void> {
   this.isLoading.set(true)
    const res = await this.authService.login({
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    });
    res.subscribe((value) => {
      this.tokenService.saveAccessToken(value.access_token);
      this.router.navigate(['wb-admin/dashboard']);
      this.isLoading.set(false)
    },error => {
      console.log(error);
      this.isLoading.set(false)
    });

  }

}
