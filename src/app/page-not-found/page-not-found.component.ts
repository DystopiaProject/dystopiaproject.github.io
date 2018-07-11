import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  errorInfo: {title: string, reqPath: string};

  errorTitle = [
    "Huh.",
    "Well...",
    "I think you are lost",
    "It ain't here!",
    "My files... are trembling!",
    "Not found"
  ];

  randnum = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.randnum = Math.floor(Math.random() * this.errorTitle.length);

    console.log(this.randnum);

    this.errorInfo = {
      title: this.errorTitle[this.randnum],
      reqPath: this.route.snapshot.url.toString(),
    };
  }

}
