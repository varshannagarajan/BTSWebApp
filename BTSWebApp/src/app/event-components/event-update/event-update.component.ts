import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Events } from '../../classes/events';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html'
})
export class EventUpdateComponent implements OnInit {

  id: string;
  event: Events;

  constructor(private route: ActivatedRoute, private m: EventService) { }

  ngOnInit() {
    const id = this.route.snapshot.params._id;
    this.m.eventsGetById(id).subscribe((e) => {
      console.log(e);
      this.event = e;
      this.m.eventSet(this.event);
    });
  }

  ngDoCheck() {
    this.m.eventSet(this.event);
    console.log(this.event);
  }

  onSubmit() {
    this.m.eventsUpdate(this.event).subscribe((data) => {
      console.log('Event Updated');
    });
  }

}
