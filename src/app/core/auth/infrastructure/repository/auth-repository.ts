import { Injectable } from "@angular/core";
import { AuthApi } from "../../domain/constants/url-constants";
import { Observable } from "rxjs";
import { IResponse } from "../../../../common/models/common";
import { ResponseTokenDto } from "../dto/responseToken";
import { HttpAppWeb } from "../../../http/http-backend";
import { UserLogin } from "../../../../common/models/user-login";
import { HttpParams } from "@angular/common/http";
import { ApplicationByUserDto } from "../dto/applicationByUser";

@Injectable({ providedIn: 'root' })
export class AuthRepository {
  constructor(private http: HttpAppWeb) {
  }
  login(model: UserLogin): Observable<IResponse<ResponseTokenDto> | null> {
    return this.http.post<IResponse<ResponseTokenDto>>(`${AuthApi.login}`, model);
  }

  getApplicationByUserId(idUser: number): Observable<IResponse<ApplicationByUserDto[]> | null> {
    let prms = new HttpParams();
    prms = prms.set('idUser', idUser);
    return this.http.get<IResponse<ApplicationByUserDto[]>>(`${AuthApi.getAplicationByUser}`, prms);
  }
}
