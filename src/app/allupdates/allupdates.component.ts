import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-allupdates',
  templateUrl: './allupdates.component.html',
  styleUrls: ['./allupdates.component.css']
})
export class AllupdatesComponent implements OnInit {
  
  allUpdatesVisible = true;
  
  constructor(
    private globalService: GlobalService) { }

  ngOnInit() {
    this.allUpdatesVisible = this.globalService.allUpdatesVisible;
  }

}
