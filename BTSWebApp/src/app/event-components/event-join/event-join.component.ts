import { Component, OnInit } from '@angular/core';
import { Events } from '../../classes/events';
import { Attendee } from '../../classes/attendees';
import { UserService } from '../../services/user.service';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-join',
  templateUrl: './event-join.component.html'
})
export class EventJoinComponent implements OnInit {
  newAttendee: Attendee;
  eventCode: String;
  eventID: String;
  constructor(private u: UserService, private e: EventService, private router: Router) {
    this.newAttendee = new Attendee();
    this.eventCode = '';
  }

  ngOnInit() {}

  onSubmit(): void {
    this.newAttendee.user_email = this.u.currentUser.user_email;
    this.newAttendee.user_firstName = this.u.currentUser.user_firstName;
    this.newAttendee.user_lastName = this.u.currentUser.user_lastName;
    this.newAttendee.attendee_id = this.generateID();

    this.e.eventAddAttendee(this.eventCode, this.newAttendee).subscribe(msg => {
      this.u.addEventToUser(this.eventCode).subscribe(s => {
        this.e.eventGetByCode(this.eventCode).subscribe(s => {
          this.eventID = s._id;
          this.router.navigate(['/eventRoom/', this.eventID]);
        });
      });
    });
  }

  generateID(): string {
    return (
      Date.now().toString(36) +
      Math.random()
        .toString(36)
        .substr(2, 5)
    ).toUpperCase();
  }
}
