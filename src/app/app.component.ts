import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DystopiaProject';
  appVersion = "1.0.0.0a";
  gitRepo = "https://github.com/DystopiaProject/dystopiaproject.github.io/";

  showNavBar = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit()
  {
    this.showNavBar = this.route.snapshot.queryParams['noNavBar'] === '1' ? false : true;
    this.route.queryParams.subscribe(
      (queryParams: Params) =>
      {
        this.showNavBar = queryParams['noNavBar']  === '1' ? false : true;
      }
    );
  }
}
