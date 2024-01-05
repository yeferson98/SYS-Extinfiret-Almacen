import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../../common/models/user-login';
import { AuthController } from '../domain/controllers/auth-controller';
import { ResponseTokenDto } from '../infrastructure/dto/responseToken';
import { ApplicationByUserDto } from '../infrastructure/dto/applicationByUser';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent implements OnInit {
  model: UserLogin = {}
  isLoginUser: boolean = false;
  applications: ApplicationByUserDto[] = [];
  userInfo: ResponseTokenDto = {};
  constructor(private controller: AuthController, private authService: AuthService) {

  }
  ngOnInit(): void {
  }
  async onLogin() {
    let response = await this.controller.login(this.model);
    if (response.error) {
      return;
    }
    this.isLoginUser = true;
    this.userInfo = response.body ?? {};
    this.getApplicationsByUser();
  }
  async getApplicationsByUser() {
    let response = await this.controller.getApplicationByUserId(this.userInfo.idUser ?? 0);
    if (response.error) {
      return;
    }
    this.applications = response.body ?? [];
  }
  async onConfirm() {
    this.authService.setAuth(this.userInfo);
  }
}
