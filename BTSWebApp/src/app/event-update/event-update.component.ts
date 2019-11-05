import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms'
import { Events } from '../events';
import { EventManagerService } from '../event-manager.service'

@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.css']
})
export class EventUpdateComponent implements OnInit {

  id: string;
  event: Events;

  constructor(private route: ActivatedRoute, private m: EventManagerService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['_id'];
    this.m.eventsGetById(id).subscribe((e)=> {
      console.log(e);
      this.event = e;
      this.m.eventSet(this.event);
    });
  }

  ngDoCheck(){
    this.m.eventSet(this.event);
    console.log(this.event);
  }

  onSubmit(){
    this.m.eventsUpdate(this.event).subscribe((data)=>{
      console.log("Event Updated");
    });
  }

}
