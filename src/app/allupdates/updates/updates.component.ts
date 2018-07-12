import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {
private id: number;
  constructor(
    private globalServices: GlobalService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    
    if(this.route.snapshot.params['id'])
    {
      console.log("aayyyy");
    }

  }

}
