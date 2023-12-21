import { Injectable } from "@angular/core";
import { AuthApi } from "../../domain/constants/url-constants";
import { Observable } from "rxjs";
import { IResponse } from "../../../../common/models/common";
import { ResponseTokenDto } from "../dto/responseToken";
import { HttpAppWeb } from "../../../http/http-backend";
import { UserLogin } from "../../../../common/models/user-login";

@Injectable({ providedIn: 'root' })
export class AuthRepository {
  constructor(private http: HttpAppWeb) {
  }
  login(model: UserLogin): Observable<IResponse<ResponseTokenDto> | null> {
    return this.http.post<IResponse<ResponseTokenDto>>(`${AuthApi.login}`, model);
  }
}
