import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Events } from '../../classes/events';
import { User } from '../../classes/user';

@Component({
  selector: 'app-event-delete',
  templateUrl: './event-delete.component.html'
})
export class EventDeleteComponent implements OnInit {
  currentUser: User;
  event: Events;
  loginError: string;

  constructor(private m: EventService) {
    this.event = new Events();
  }

  ngOnInit() {
    // this.event=this.m.getCurrentEvents();
  }

  // Methods
  onSubmit() {
    this.m.eventsDelete(this.event._id).subscribe(data => {
      console.log('Event Deleted');
    });
  }
}
