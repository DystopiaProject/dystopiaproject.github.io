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
  app: {id: number, displayName: string, appVersion: number, description: string};

  constructor(
    private appsServices: AppsService,
    private route: ActivatedRoute) { }
    

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];

    this.app = this.appsServices.getApp(id);

    this.route.params.subscribe( (params: Params) =>
      {
        this.app = this.appsServices.getApp(+params['id']);
      }
    );
  }

}
