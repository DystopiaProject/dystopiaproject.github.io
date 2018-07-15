import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { AppInfo } from "./AppInfo";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AppsService {
    private appInfo: AppInfo;
    private apps_old = [
        {
          id: 1,
          displayName: "DystopiaGame",
          appVersion: 1421,
          description: "An FPS RPG in UE4 developed by ZanyLeonic and DaRiceCake."
        },
        {
          id: 2,
          displayName: "DaRiceCake's Animal Crossing",
          appVersion: 1021,
          description: "A recreation of Animal Crossing in UE4."
        },
        {
          id: 3,
          displayName: "Test App",
          appVersion: 48,
          description: "A test app for this."
        }
      ];


    constructor(private http: HttpClient){}

    getAppsData() : Observable<AppInfo>
    {
        return this.http.get<AppInfo>("https://dystopiaproject.github.io/assets/data/appinfo.json").pipe(map(res => res));
    }

    getApp(id: number)
    {
  
    }
}