import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Events } from '../../classes/events';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-event-read',
  templateUrl: './event-read.component.html'
})
export class EventReadComponent implements OnInit {
  id: String;
  event: Events;
  attendeeUsers: User[];

  constructor(
    private route: ActivatedRoute,
    private u: UserService,
    private e: EventService
  ) {
    this.attendeeUsers = [];
  }

  ngOnInit() {
    const id = this.route.snapshot.params['_id'];
    this.e.eventGetByCode(id).subscribe(s => {
      this.event = s;
      this.e.eventSet(this.event);
      for (let i = 0; i < this.event.ev_attendees.length; i++) {
        this.u
          .reqresUserGetByUsername(this.event.ev_attendees[i].user_email)
          .subscribe(s => {
            this.attendeeUsers.push(s);
          });
      }
    });
  }
}
