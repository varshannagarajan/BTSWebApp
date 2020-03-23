import { Component, OnInit } from '@angular/core';
import { Events } from '../../classes/events';
import { EventService } from '../../services/event.service';
import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';
import { Address } from 'src/app/classes/address';
import { Attendee } from '../../classes/attendees';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styles: [
    `
      .eventInfo {
        width: 100%;
      }

      .eventTime {
        width: 50%;
      }
    `
  ]
})
export class EventCreateComponent implements OnInit {
  currentUser: User;
  newEvent: Events;
  loginError: string;
  category: String;
  startDate: String;
  endDate: String;
  street: String;
  postalCode: String;
  city: String;
  province: String;
  country: String;

  constructor(
    private em: EventService,
    private um: UserService,
    private router: Router
  ) {
    this.newEvent = new Events();
    this.newEvent.ev_name = '';
    this.currentUser = this.um.currentUser;
    this.newEvent.ev_category = [];
    this.category = '';
    //this.newEvent.ev_date = {start: "", end: ""};
    this.newEvent.ev_address = new Address();
    this.newEvent.ev_address.street = '';
    this.newEvent.ev_address.postalCode = '';
    this.newEvent.ev_address.city = '';
    this.newEvent.ev_address.country = 'Canada';
  }

  ngOnInit() {}

  // Methods
  onSubmit(): void {
    // this.newEvent.ev_coordinator = this.currentUser.user_email;
    if (this.category != '') {
      this.newEvent.ev_category.push(this.category);
    }
    let newEventCode = this.generateID();
    this.newEvent.ev_code = newEventCode;
    // this.newEvent.ev_date.start = this.startDate;
    // this.newEvent.ev_date.end = this.endDate;
    this.newEvent.ev_coordinator = this.um.getCurrentUser().user_email;
    this.newEvent.ev_attendees = [];
    this.newEvent.ev_photo = '';
    this.newEvent.ev_private = false;
    this.newEvent.ev_invitedUsers = [];
    this.newEvent.ev_address.street = this.street;
    this.newEvent.ev_address.postalCode = this.postalCode;
    this.newEvent.ev_address.city = this.city;
    // Change when other countries are added
    this.newEvent.ev_address.country = 'Canada';

    let newAttendee = new Attendee();
    newAttendee.user_email = this.currentUser.user_email;
    newAttendee.user_firstName = this.currentUser.user_firstName;
    newAttendee.user_lastName = this.currentUser.user_lastName;
    newAttendee.attendee_id = this.generateID();

    console.log(this.newEvent);
    this.em.eventsCreate(this.newEvent).subscribe(createdEvent => {
      this.em.eventAddAttendee(newEventCode, newAttendee).subscribe(msg => {
        this.um.addEventToUser(newEventCode).subscribe(s => {
          let eventCode = newEventCode;
          let urlToRedirectTo = '/eventRead/' + eventCode;
          this.router.navigateByUrl(urlToRedirectTo);
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
