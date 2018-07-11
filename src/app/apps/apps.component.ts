import { Component, OnInit } from '@angular/core';
import { AppsService } from './apps.service';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {
  private apps: {id: number, displayName: string, appVersion: number}[] = [];

  constructor(private appServices: AppsService) { }

  ngOnInit()
  {
    this.apps = this.appServices.getApps();
  }
}
