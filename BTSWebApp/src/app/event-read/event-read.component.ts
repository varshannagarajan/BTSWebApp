import { Component, OnInit } from '@angular/core';
import { EventManagerService } from '../event-manager.service';
import { Events } from '../events';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-read',
  templateUrl: './event-read.component.html',
  styleUrls: ['./event-read.component.css']
})
export class EventReadComponent implements OnInit {

  id: String;
  event: Events;

  constructor(private route: ActivatedRoute, private m: EventManagerService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['_id'];
    this.m.eventsGetById(id).subscribe((s)=> {
      console.log(s);
      this.event = s;
    });
    
  }

  ngDoCheck(){
    this.m.eventSet(this.event);
    console.log(this.event);
  }

}
