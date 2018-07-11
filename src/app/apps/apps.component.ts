import { Component, OnInit } from '@angular/core';
import { AppsService } from './apps.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {
  apps: {id: number, displayName: string, appVersion: number}[] = [];

  constructor(private appServices: AppsService,
  private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit()
  {
    this.apps = this.appServices.getApps();
  }

  loadApp(id:number)
  {
    this.router.navigate([id], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
