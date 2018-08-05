import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  AppName:string = "[AppName]";
  AppVersion:string = "0.0.0.0";
  ProductionMode:string = "";
  BrowserUA:string;

  constructor(private globalService: GlobalService) { }

  ngOnInit() {
    this.AppName = this.globalService.title;
    this.AppVersion = this.globalService.appVersion;
    this.ProductionMode = environment.production ? "Yes" : "No";
    this.BrowserUA = window.navigator.userAgent;
  }
}
