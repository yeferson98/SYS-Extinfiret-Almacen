import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IAppConfig } from "../../common/models/app-config";
import { environment } from "../../../environments/environment";

@Injectable()
export class AppConfig {
    static appSetting: IAppConfig = {}
    constructor(private http: HttpClient) { }
    load() {
        const jsonFile = `assets/config/app.config.${environment.name}.json`;
        return new Promise<void>((resolve, reject) => {
            this.http.get<IAppConfig>(jsonFile).subscribe({
                next: (data) => {
                    AppConfig.appSetting = data;
                },
                complete: () => {
                    resolve();
                },
                error: (err) => {
                    console.log(err);
                    reject(`Could not load file '${jsonFile}': ${JSON.stringify(err)}`);
                }
            });
        });
    }
}
