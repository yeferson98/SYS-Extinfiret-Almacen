import { Observable } from 'rxjs';
import { TokenModel } from './../domain/model/tokenModel';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { AuthApi } from '../domain/constants/url-constants';
import { HttpParams } from '@angular/common/http';
import { ResponseTokenDto } from '../infrastructure/dto/responseToken';
import { isNullOrUndefined } from '../../../common/functions/common.functions';
import { AuthConstants } from '../domain/constants/auth.constants';

@Injectable({ providedIn: 'root' })
export class AuthService {
  modelRefresh: TokenModel = { app: '', code: '', grant_type: '' };
  constructor(private route: Router) {
  }
  setAuth(model: ResponseTokenDto,) {
    localStorage.setItem(AuthConstants.token, model.token!);
    localStorage.setItem(AuthConstants.session, JSON.stringify(model));
    this.route.navigate(["/portal"]);
  }
  loggout() {
    localStorage.removeItem(AuthConstants.token);
    localStorage.removeItem(AuthConstants.session);
    this.route.navigate(["/"]);
  }
  isLoggin() {
    let user = localStorage.getItem(AuthConstants.session);
    if (isNullOrUndefined(user)) {
      return false;
    }
    return true;
  }

  // isTokenExpired(): boolean {
  //   let token = localStorage.getItem(AuthConstants.token);
  //   if (isNullOrUndefined(token)) {
  //     return false;
  //   }
  //   return this.jwtHelper.isTokenExpired(token);
  // }
  getInfoUser(): ResponseTokenDto {
    let userLocal = localStorage.getItem(AuthConstants.session);
    if (isNullOrUndefined(userLocal)) {
      return { token: undefined };
    }
    const decodedToken = JSON.parse(userLocal!) as ResponseTokenDto;
    return decodedToken;
  }
}
