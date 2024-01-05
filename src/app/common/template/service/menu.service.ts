import { Injectable } from "@angular/core";
import { HttpAppWeb } from "../../../core/http/http-backend";
import { Observable } from "rxjs";
import { IResponse } from "../../models/common";
import { HttpParams } from "@angular/common/http";
import { MenuItem } from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class MenuServiceApp {
  constructor(private http: HttpAppWeb){}
  getMenuApp(idApplication: number): Observable<IResponse<MenuItem[]> | null> {
    let prms = new HttpParams();
    prms = prms.set('roleUserAppId', idApplication);
    return this.http.get<IResponse<MenuItem[]>>(`Infrastructure/GetSiteMapForAppp`, prms);
  }
}
