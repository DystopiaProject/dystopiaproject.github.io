import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  AppName:string = "[AppName]";
  AppVersion:string = "0.0.0.0";
  BrowserUA:string;

  constructor(private globalService: GlobalService) { }

  ngOnInit() {
    this.AppName = this.globalService.title;
    this.AppVersion = this.globalService.appVersion;
    this.BrowserUA = window.navigator.userAgent;
  }
}
