import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { AppsService } from '../apps/apps.service';
import { AppInfo } from '../apps/AppInfo';

@Component({
  selector: 'app-allupdates',
  templateUrl: './allupdates.component.html',
  styleUrls: ['./allupdates.component.css']
})
export class AllupdatesComponent implements OnInit {
  private appInfo: AppInfo;
  apps: [{DisplayName: string, AppVersion: number, Description: string}];
  updates: [{AppId: number, PostName: string, PostDesc: string, PostLink: string, TimeStamp: number}];
  allUpdatesVisible = true;
  loaded = false;

  constructor(
    private globalService: GlobalService,
    private appsServices: AppsService,
    private route: ActivatedRoute,
    private router: Router) 
    { }

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
      }
    );

    this.appsServices.getAppsData().subscribe(data => {
      this.appInfo = data;
      this.apps = this.appInfo.Apps;
      this.updates = this.appInfo.Updates;
      this.loaded = true;

      this.updates.sort((a, b) => {
        if(a.TimeStamp > b.TimeStamp) return -1;
        else if(a.TimeStamp < b.TimeStamp) return 1;
        else return 0;
      });
    });
  }

  getApp(id: number)
  {
    return this.apps[id];
  }

  loadUpdates(id:number)
  {
    this.router.navigate([id], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
