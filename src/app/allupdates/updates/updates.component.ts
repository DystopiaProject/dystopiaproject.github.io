import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GlobalService } from '../../global.service';
import { AppInfo } from '../../apps/AppInfo';
import { AppsService } from '../../apps/apps.service';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {
private id: number;
private appInfo: AppInfo;
private apps: [{DisplayName: string, AppVersion: number, Description: string}];
private updates: [{AppId: number, PostName: string, PostDesc: string, PostLink: string, TimeStamp: number}];
private allUpdatesVisible = true;
private loaded = false;

private appName = "";
private appVer = 0;
private appDesc = "";

  constructor(
    private globalService: GlobalService,
    private appServices: AppsService,
    private route: ActivatedRoute,
    private router: Router) {
      
     }

  ngOnInit() {
    
    this.updates = 
    [
      {
        AppId: -1,
        PostName: "Loading...",
        PostDesc: "Please wait...",
        PostLink: "",
        TimeStamp: 0
      }
    ];

    this.route.params.subscribe( (params: Params) =>
      {
        this.allUpdatesVisible = this.globalService.allUpdatesVisible;
        console.log(this.allUpdatesVisible);

        if (this.appInfo != null)
        {
          this.appName = this.appInfo.Apps[+params["id"]].DisplayName;
          this.appVer = this.appInfo.Apps[+params["id"]].AppVersion;
          this.appDesc = this.appInfo.Apps[+params["id"]].Description;

          this.updates = this.appInfo.Updates;
          this.updates = this.getNewsFromApp(+params["id"]);

          this.updates.sort((a, b) => {
            if(a.TimeStamp > b.TimeStamp) return -1;
            else if(a.TimeStamp < b.TimeStamp) return 1;
            else return 0;
          });
          console.log(this.updates);
        }
      }
    );

    this.appServices.getAppsData().subscribe(data => {
      this.appInfo = data;
      this.apps = this.appInfo.Apps;
      this.updates = this.appInfo.Updates;
      this.loaded = true;

      this.appName = this.appInfo.Apps[+this.route.snapshot.params["id"]].DisplayName;
      this.appVer = this.appInfo.Apps[+this.route.snapshot.params["id"]].AppVersion;
      this.appDesc = this.appInfo.Apps[+this.route.snapshot.params["id"]].Description;

      this.updates = this.getNewsFromApp(+this.route.snapshot.params["id"]);

      this.updates.sort((a, b) => {
        if(a.TimeStamp > b.TimeStamp) return -1;
        else if(a.TimeStamp < b.TimeStamp) return 1;
        else return 0;
      });
      console.log(this.updates);
    });

  }

  getNewsFromApp(id: number)
  {
    var appUpdates: [{AppId: number, PostName: string, PostDesc: string, PostLink: string, TimeStamp: number}] = [{AppId: -1, PostName: "", PostDesc: "", PostLink: "", TimeStamp: 0}];
    appUpdates.shift();

    this.updates.forEach((s) =>
    {
      console.log(s);
      if (s.AppId == id)
      {
        appUpdates.push(s);
      }
    });

    return appUpdates;
  }

  goToAllUpdates()
  {
    this.router.navigate(["../"], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
