import { Component, OnInit } from '@angular/core';
import { AppsService } from './apps.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppInfo } from './AppInfo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {
  private appInfo: AppInfo;
  apps: [{DisplayName: string, AppVersion: number, Description: string}];
  loaded = false;

  constructor(private appServices: AppsService,
  private route: ActivatedRoute,
  private router: Router) { 
    
  }

  ngOnInit()
  {
    this.apps = [{
      DisplayName: "Loading...",
      AppVersion: 0,
      Description: "Loading..."
    }];

    this.appServices.getAppsData().subscribe(data => {
      this.appInfo = data;
      this.apps = this.appInfo.Apps;
      this.loaded = true;
      console.log(this.apps);
    });
  }

  loadApp(id:number)
  {
    this.router.navigate([id], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
