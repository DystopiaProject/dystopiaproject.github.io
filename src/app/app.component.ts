import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "default";
  showNavBar = true;

  constructor(
    private globalService: GlobalService,
    private route: ActivatedRoute) {}

  ngOnInit()
  {
    this.title = this.globalService.title;
    
    this.showNavBar = this.route.snapshot.queryParams['noNavBar'] === '1' ? false : true;
    this.route.queryParams.subscribe(
      (queryParams: Params) =>
      {
        this.showNavBar = queryParams['noNavBar']  === '1' ? false : true;
      }
    );
    console.log(this.route.component);
  }
}
