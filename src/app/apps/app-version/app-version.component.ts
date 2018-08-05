import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { AppsComponent } from '../apps.component';
import { AppsService } from '../apps.service';

@Component({
  selector: 'app-app-version',
  templateUrl: './app-version.component.html',
  styleUrls: ['./app-version.component.css']
})
export class AppVersionComponent implements OnInit {
  app: {DisplayName: string, AppVersion: number, Description: string, AppLink: string, DownloadText: string};

  constructor(
    private appsServices: AppsService,
    private route: ActivatedRoute) { }
    
    DownloadsAvailable: boolean = false;

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];

    this.app = {
      DisplayName: "Loading...",
      AppVersion: 0,
      Description: "Loading...",
      AppLink: "",
      DownloadText: ""
    };
    
    this.appsServices.getAppsData().subscribe(data => {
      this.app = data.Apps[id];
      this.DownloadsAvailable = typeof(this.app.AppLink) != 'undefined' ? true : false;
    });

    this.route.params.subscribe( (params: Params) =>
      {
        this.appsServices.getAppsData().subscribe(data => {
        this.app = data.Apps[+params['id']];
        this.DownloadsAvailable = typeof(this.app.AppLink) != 'undefined' ? true : false;
        });
      }
    );
  }

}
